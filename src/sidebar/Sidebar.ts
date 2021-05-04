import { MenuButton, MenuButtonProps } from '../menu-button/MenuButton';

export interface SidebarButton extends MenuButtonProps {
  id: number | string;
  selected?: boolean;
}

export interface IHeader {
  label: string;
}

export interface SidebarProps {
  container: HTMLElement;
  header: IHeader;
  content: SidebarButton[];
  footerLabel: string;
}

export interface ISidebarConstructor {
  new (props: SidebarProps): ISidebar;
}

export interface ISidebar {
  collapsed: boolean;
  destroy: () => void;

  onSelected?: (id: number | string) => void;
}
class Sidebar implements ISidebar {
  #container: HTMLElement;

  #header: MenuButton;

  #content: HTMLElement;

  #contentItems: MenuButton[] = [];

  #footer: MenuButton;

  #collapsedContainer: HTMLElement;

  #collapsedButton: HTMLButtonElement;

  #collapsedIcon: HTMLElement;

  #isCollapsed = false;

  onSelected?: (id: number | string) => void;

  constructor({ container, header, content, footerLabel }: SidebarProps) {
    this.#container = container;
    this.#container.classList.add('tw-sidebar');

    this.#header = new MenuButton({
      container: this.#container,
      label: header.label,
      level: 'header',
    });

    this.#content = document.createElement('nav');
    this.#content.classList.add('tw-scrollbar', 'tw-sidebar-content');
    content.forEach((item) => {
      const menuItem = new MenuButton({
        container: this.#content,
        level: item.level,
        label: item.label,
        icon: item.icon,
      });
      menuItem.selected = Boolean(item.selected);
      menuItem.onClick = this.#clickHandler({ item: menuItem, id: item.id });
      this.#contentItems.push(menuItem);
    });

    this.#container.appendChild(this.#content);

    this.#footer = new MenuButton({ container: this.#container, level: 'footnote', label: footerLabel });

    this.#collapsedContainer = document.createElement('div');
    this.#collapsedContainer.classList.add('tw-sidebar-collapsed');

    this.#collapsedButton = document.createElement('button');
    this.#collapsedButton.classList.add('tw-sidebar-collapsed-btn');

    this.#collapsedIcon = document.createElement('div');
    this.#collapsedIcon.classList.add('tw-i-chevron-left');

    this.#collapsedButton.appendChild(this.#collapsedIcon);

    this.#collapsedContainer.appendChild(this.#collapsedButton);

    this.#container.appendChild(this.#collapsedContainer);

    this.#collapsedButton.addEventListener('click', this.#onCollapsedClick);
  }

  get collapsed(): boolean {
    return this.#isCollapsed;
  }

  set collapsed(value: boolean) {
    if (value) {
      this.#container.classList.add('tw-sidebar-collapsed');
      this.#collapsedIcon.classList.remove('tw-i-chevron-left');
      this.#collapsedIcon.classList.add('tw-i-chevron-right');
    } else {
      this.#container.classList.remove('tw-sidebar-collapsed');
      this.#collapsedIcon.classList.remove('tw-i-chevron-right');
      this.#collapsedIcon.classList.add('tw-i-chevron-left');
    }

    this.#contentItems.forEach((item) => {
      const curItem = item;
      curItem.collapsed = value;
    });

    this.#header.collapsed = value;
    this.#footer.collapsed = value;

    this.#isCollapsed = value;
  }

  #onCollapsedClick = (): void => {
    this.collapsed = !this.collapsed;
  };

  #clickHandler = (selected: { item: MenuButton; id: number | string }) => (): void => {
    const { item, id } = selected;
    this.#contentItems.forEach((elem) => {
      const currItem = elem;
      currItem.selected = false;
    });

    item.selected = true;

    if (this.onSelected) this.onSelected(id);
  };

  destroy = (): void => {
    this.#container.removeChild(this.#content);
    this.#header.destroy();
    this.#footer.destroy();

    this.#contentItems.forEach((item) => {
      item.destroy();
    });

    this.#container.removeChild(this.#collapsedContainer);

    this.#collapsedButton.removeEventListener('click', this.#onCollapsedClick);
  };
}

export { Sidebar };
