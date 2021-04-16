export interface SidebarButton {
  label: string;
  level: 1 | 2;
  icon?: string;
  name?: string;
}

export interface IHeader {
  icon: string;
  label: string;
}

export interface SidebarProps {
  container: HTMLElement;
  header: IHeader;
  content: SidebarButton[];
  footerLabel: string;
  enableMoviment: boolean;
  onSelected?: (selected: HTMLElement) => void;
}

export interface ISidebarConstructor {
  new (props: SidebarProps): ISidebar;
}

export interface ISidebar {
  destroy: () => void;
}

class Sidebar implements ISidebar {
  #_container: HTMLElement;

  #_header: HTMLElement;

  #_content: HTMLElement;

  #_footer: HTMLElement;

  #_contentList: { [key: string]: HTMLElement } = {};

  #_onSelected?: (selected: HTMLElement) => void;

  constructor({ container, header, content, footerLabel, onSelected, enableMoviment = true }: SidebarProps) {
    this.#_onSelected = onSelected;

    this.#_container = container;
    this.#_container.dataset.testid = 'sidebar';
    this.#_header = document.createElement('div');
    this.#_header.dataset.testid = 'header';
    this.#_content = document.createElement('div');
    this.#_content.dataset.testid = 'content';
    this.#_footer = document.createElement('div');
    this.#_footer.dataset.testid = 'footer';

    this.#_initialize(container, header, content, footerLabel, enableMoviment);
  }

  #_initialize = (
    container: HTMLElement,
    header: IHeader,
    content: SidebarButton[],
    footerLabel: string,
    enableMoviment: boolean
  ): void => {
    this.#_container.classList.add(`${enableMoviment ? 'tw-grow-sidebar' : ''}`, 'tw-sidebar');

    this.#_header.classList.add('tw-sidebar-btn', 'tw-sidebar-btn-l0');

    this.#_content.classList.add('tw-sidebar-content');

    this.#_footer.classList.add('tw-sidebar-btn-footnote');

    this.#_container.appendChild(this.#_header);
    this.#_container.appendChild(this.#_content);
    this.#_container.appendChild(this.#_footer);

    const hIcon = document.createElement('span');
    const hLabel = document.createElement('p');
    hIcon.classList.add(`tw-i-${header.icon}`, 'tw-sidebar-btn-icon');

    hLabel.classList.add(`${enableMoviment ? 'tw-hide' : ''}`, 'tw-sidebar-btn-label');
    hLabel.innerText = header.label;

    this.#_header.appendChild(hIcon);
    this.#_header.appendChild(hLabel);

    const levels = ['tw-sidebar-btn-l0', 'tw-sidebar-btn-l1', 'tw-sidebar-btn-l2'];

    if (enableMoviment) {
      const expandContentIcon = document.createElement('div');
      expandContentIcon.classList.add('tw-btn-expand');
      const expandIcon = document.createElement('span');
      expandIcon.classList.add('tw-i-chevron-right');
      expandContentIcon.appendChild(expandIcon);

      this.#_content.appendChild(expandContentIcon);
      expandContentIcon.addEventListener('click', this.#_clickExpandMenu);
    }

    content.forEach((el, i) => {
      const id = `${i}-${el.level}-${el.label}`;
      const child: HTMLElement & { name: string } = document.createElement('button');
      child.id = id;
      child.name = el.name || '';

      child.classList.add(`${el.level === 2 && enableMoviment && 'tw-hide'}`, 'tw-sidebar-btn', levels[el.level]);
      this.#_contentList[id] = child;
      let icon: HTMLElement;
      if (el.icon) {
        icon = document.createElement('span');
        icon.classList.add(`tw-i-${el.icon}`, 'tw-sidebar-btn-icon');
        child.appendChild(icon);
      }

      const label = document.createElement('p');
      label.classList.add(`${enableMoviment ? 'tw-hide' : ''}`, 'tw-sidebar-btn-label');
      label.innerText = el.label;

      child.appendChild(label);
      child.addEventListener('click', this.#_clickHandler);

      this.#_content.appendChild(child);
    });

    const fLabel = document.createElement('p');
    fLabel.classList.add('tw-version');
    fLabel.innerText = footerLabel;

    this.#_footer.appendChild(fLabel);
  };

  #_clickHandler = (e: MouseEvent): void => {
    const target: HTMLElement = e.currentTarget as HTMLElement;

    Object.values(this.#_contentList).map((el: HTMLElement) => el.classList.remove('selected'));
    target.classList.add('selected');

    if (this.#_onSelected) this.#_onSelected(target);
  };

  #_findItems = (item): void => {
    item.forEach((res: HTMLElement) => res.classList.toggle('tw-hide'));
  };

  #_removeClass = (): void => {
    this.#_content.querySelector('.tw-btn-expand span')?.classList.remove('tw-i-chevron-right');
    this.#_content.querySelector('.tw-btn-expand span')?.classList.remove('tw-i-chevron-left');
  };

  #_clickExpandMenu = (): void => {
    const active = this.#_container.classList.contains('tw-grow-sidebar');
    this.#_removeClass();

    document
      .querySelector('.tw-btn-expand span')
      ?.classList.add(`${active ? 'tw-i-chevron-left' : 'tw-i-chevron-right'}`);

    this.#_container.classList.toggle('tw-grow-sidebar');
    this.#_findItems(this.#_container.querySelectorAll('.tw-sidebar-btn-label'));
    this.#_findItems(this.#_container.querySelectorAll('.tw-sidebar-btn-l2'));
  };

  destroy = (): void => {
    this.#_container.removeChild(this.#_header);
    this.#_container.removeChild(this.#_content);
    this.#_container.removeChild(this.#_footer);

    Object.values(this.#_contentList).map((el) => {
      return el.removeEventListener('click', this.#_clickHandler);
    });

    this.#_contentList = {};
  };
}

export { Sidebar };
