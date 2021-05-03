export interface MenuButtonProps {
  container: HTMLElement;
  level: 'first' | 'second' | 'header' | 'footnote';
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
}

export interface IMenuButtonConstructor {
  new (props: MenuButtonProps): IMenuButton;
}

export interface IMenuButton {
  selected: boolean;
  collapsed: boolean;
  readonly destroy: () => void;

  onClick?: (e: MouseEvent) => void;
  onStartTransition?: () => void;
  onEndTransition?: () => void;
}

class MenuButton implements IMenuButton {
  #container: HTMLElement;

  #button: HTMLButtonElement;

  #icon?: HTMLElement;

  #label: HTMLSpanElement;

  #isSelected = false;

  #isCollapsed = false;

  onClick?: (e: MouseEvent) => void;

  onStartTransition?: () => void;

  onEndTransition?: () => void;

  constructor({ container, level, icon, label, variant = 'primary' }: MenuButtonProps) {
    this.#container = container;
    let currentIcon = icon;

    const levels = {
      first: 'tw-menu-btn-first',
      second: 'tw-menu-btn-second',
      header: 'tw-menu-btn-header',
      footnote: 'tw-menu-btn-footnote',
    };

    this.#button = document.createElement('button');
    this.#button.classList.add('tw-menu-btn', variant === 'secondary' ? 'tw-menu-btn-secondary' : levels[level]);

    if ((currentIcon && level !== 'footnote' && variant !== 'secondary') || level === 'header') {
      if (level === 'header') currentIcon = 'bars';
      this.#icon = document.createElement('span');
      this.#icon.classList.add(`tw-i-${currentIcon as string}`, 'tw-menu-btn-icon');
      this.#button.appendChild(this.#icon);
    } else {
      this.#button.classList.add('tw-menu-btn-noicon');
    }

    this.#label = document.createElement('span');
    this.#label.innerText = label;

    this.#button.appendChild(this.#label);
    if (level !== ('header' || 'footnote')) this.#button.addEventListener('click', this.#clickHandler);

    this.#button.addEventListener('transitionstart', this.#startAnimation);
    this.#button.addEventListener('transitioncancel', this.#endAnimation);
    this.#button.addEventListener('transitionend', this.#endAnimation);

    this.#container.appendChild(this.#button);
  }

  get selected(): boolean {
    return this.#isSelected;
  }

  set selected(value: boolean) {
    if (value === this.#isSelected) return;

    if (value) {
      this.#button.classList.add('tw-menu-btn-selected');
    } else {
      this.#button.classList.remove('tw-menu-btn-selected');
    }

    this.#isSelected = value;
  }

  get collapsed(): boolean {
    return this.#isCollapsed;
  }

  set collapsed(value: boolean) {
    if (value === this.#isCollapsed) return;

    if (value) {
      this.#button.classList.add('tw-menu-btn-collapsed');
    } else {
      this.#button.classList.remove('tw-menu-btn-collapsed');
    }

    this.#isCollapsed = value;
  }

  #clickHandler = (e: MouseEvent): void => {
    if (this.onClick) this.onClick(e);
  };

  #startAnimation = (): void => {
    if (this.onStartTransition) this.onStartTransition();
  };

  #endAnimation = (): void => {
    if (this.onEndTransition) this.onEndTransition();
  };

  destroy = (): void => {
    this.#button.removeEventListener('click', this.#clickHandler);
    this.#button.removeEventListener('transitionstart', this.#startAnimation);
    this.#button.removeEventListener('transitioncancel', this.#endAnimation);
    this.#button.removeEventListener('transitionend', this.#endAnimation);
    this.#container.removeChild(this.#button);
  };
}

export { MenuButton };
