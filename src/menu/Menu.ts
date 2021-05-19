import { popperGenerator, defaultModifiers, Options, Instance } from '@popperjs/core/lib/popper-lite';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';

export interface IMenuContent {
  label: string | { first: string; second: string };
  id: string | number;
  selected?: boolean;
  disabled?: boolean;
}

export interface MenuProps {
  ref: HTMLElement;
  content: IMenuContent[];
  classes: string[];
  popperOptions?: Partial<Options>;
}

export interface IMenuConstructor {
  new (props?: MenuProps): IMenu;
}

export interface IMenu {
  open: boolean;
  readonly destroy: () => void;

  onClose?: () => void;
  onSelected?: (id: string | number) => void;
}

const createPopper = popperGenerator({ defaultModifiers: [...defaultModifiers, arrow, offset, preventOverflow] });

class Menu implements IMenu {
  #container: HTMLElement;

  #ref: HTMLElement;

  #arrow: HTMLElement;

  #popper: Instance;

  #listItems: { [k: string]: HTMLElement } = {};

  #isOpen = false;

  onSelected?: (id: string | number) => void;

  onClose?: () => void;

  constructor({ ref, content, classes = [], popperOptions }: MenuProps) {
    this.#ref = ref;

    this.#container = document.createElement('div');
    this.#container.classList.add('tw-menu', 'tw-menu-closed', ...classes);

    this.#arrow = document.createElement('div');
    this.#arrow.classList.add('tw-menu-arrow');
    this.#arrow.dataset.popperArrow = '';
    this.#container.appendChild(this.#arrow);

    content.forEach((bt) => {
      const item = document.createElement('div');
      item.classList.add('tw-listitem');
      if (bt.selected) item.classList.add('tw-listitem-selected');
      if (typeof bt.label === 'string') {
        item.innerText = bt.label;
      } else {
        const l1 = document.createElement('h3');
        l1.classList.add('tw-listitem-first');
        l1.innerText = bt.label.first;

        const l2 = document.createElement('p');
        l2.classList.add('tw-listitem-second');
        l2.innerText = bt.label.second;

        item.classList.add('tw-listitem-multi');
        item.appendChild(l1);
        item.appendChild(l2);
      }

      if (bt.disabled) {
        item.classList.add('tw-listitem-disabled');
      }

      item.id = String(bt.id);
      item.addEventListener('click', this.#handleSelected);
      this.#listItems[bt.id] = item;

      this.#container.appendChild(item);
    });

    document.body.appendChild(this.#container);

    this.#popper = createPopper(ref, this.#container, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 15],
          },
        },
      ],
      ...popperOptions,
    });

    this.#container.addEventListener('animationcancel', this.#handleAnimation);
    this.#container.addEventListener('animationend', this.#handleAnimation);
  }

  get open(): boolean {
    return this.#isOpen;
  }

  set open(value: boolean) {
    if (value) {
      this.#popper.update().catch(() => {});
      this.#container.classList.remove('tw-menu-closed', 'tw-menu-closing');
      this.#ref.classList.add('tw-pointer-events-none');
    } else {
      this.#container.classList.add('tw-menu-closing');
    }

    this.#isOpen = Boolean(value);
  }

  #handleAnimation = (): void => {
    if (!this.#isOpen) {
      this.#container.classList.add('tw-menu-closed');
      window.removeEventListener('pointerdown', this.#clickOutside);
      this.#ref.classList.remove('tw-pointer-events-none');
    } else {
      window.addEventListener('pointerdown', this.#clickOutside);
    }
  };

  #handleSelected = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    Object.entries(this.#listItems).forEach(([key, item]) => {
      const el = item;
      el.classList.remove('tw-listitem-selected');
      if (key === target.id) el.classList.add('tw-listitem-selected');
    });

    if (this.onSelected) this.onSelected(target.id);
    if (this.onClose) this.onClose();
  };

  #clickOutside = (e: MouseEvent): void => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const bounds = this.#container.getBoundingClientRect();

    if (
      mouseX < bounds.x ||
      mouseY < bounds.y ||
      mouseX > bounds.x + bounds.width ||
      mouseY > bounds.y + bounds.height
    ) {
      if (this.onClose) this.onClose();
    }
  };

  destroy(): void {
    window.removeEventListener('pointerdown', this.#clickOutside);
    this.#container.removeEventListener('animationcancel', this.#handleAnimation);
    this.#container.removeEventListener('animationend', this.#handleAnimation);

    Object.values(this.#listItems).forEach((item) => {
      item.removeEventListener('click', this.#handleSelected);
    });

    document.body.removeChild(this.#container);
  }
}

export { Menu };
