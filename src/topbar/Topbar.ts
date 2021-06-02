import initials from 'initials';
import { Menu, IMenu, IMenuContent } from '../menu/Menu';

export interface ITopbarLangMenu extends IMenuContent {
  short: string;
}

export interface ITopbarUserMenu {
  menu: IMenuContent[];
  user?: { email: string; name?: string };
}

export interface TopbarProps {
  container: HTMLElement;
  title: string;
  icon?: string;
  langMenu?: ITopbarLangMenu[];
  userMenu?: ITopbarUserMenu;
  backButton?: boolean;
}

export interface ITopbarConstructor {
  new (props: TopbarProps): ITopbar;
}

export interface ITopbar {
  readonly destroy: () => void;

  onLangSelected?: (id: string | number) => void;
  onUserSelected?: (id: string | number) => void;
  onBack?: () => void;
}

class Topbar implements ITopbar {
  #container: HTMLElement;

  #contentTitle: HTMLElement;

  #title: HTMLElement;

  #menuContainer: HTMLElement;

  #langButton?: HTMLButtonElement;

  #langMenu?: IMenu;

  #langMenuList: { [k: string]: ITopbarLangMenu } = {};

  #langShort?: HTMLElement;

  #avatarButton?: HTMLButtonElement;

  #avatarMenu?: IMenu;

  #backButton?: HTMLElement;

  onLangSelected?: (id: string | number) => void;

  onUserSelected?: (id: string | number) => void;

  onBack?: () => void;

  constructor({ container, backButton, title, icon = '', langMenu, userMenu }: TopbarProps) {
    this.#container = container;
    this.#container.classList.add('tw-topbar');

    if (backButton) {
      this.#backButton = document.createElement('button');
      this.#backButton.classList.add('tw-btn', 'tw-btn-clean', 'tw-btn-rounded', 'tw-body2', 'tw-topbar-backbtn');
      this.#backButton.addEventListener('click', this.#clickBackHandle);

      const backIcon = document.createElement('div');
      backIcon.classList.add('tw-i-arrow-left', 'tw-text-gray', 'tw-text-2xl');

      this.#backButton.appendChild(backIcon);

      this.#container.appendChild(this.#backButton);
    }

    this.#title = document.createElement('h3');
    this.#title.classList.add('tw-topbar-title');
    this.#title.innerText = title;

    const iconTitle = document.createElement('img');
    iconTitle.classList.add('tw-topbar-icon');
    iconTitle.src = icon;
    iconTitle.alt = title;

    this.#contentTitle = document.createElement('div');
    this.#contentTitle.classList.add('tw-topbar-content');

    if (icon && icon !== '') {
      this.#contentTitle.appendChild(iconTitle);
    }
    this.#contentTitle.appendChild(this.#title);

    this.#menuContainer = document.createElement('div');
    this.#menuContainer.classList.add('tw-topbar-menucontainer');

    if (langMenu) {
      this.#langButton = document.createElement('button');
      this.#langButton.classList.add('tw-btn', 'tw-btn-clean', 'tw-items-center');

      this.#langShort = document.createElement('p');
      this.#langShort.classList.add('tw-body3', 'tw-text-gray', 'tw-font-bold');

      langMenu.forEach((item) => {
        if (item.selected && this.#langShort) this.#langShort.innerText = item.short.toUpperCase();

        this.#langMenuList[item.id] = item;
      });

      const worldIcon = document.createElement('div');
      worldIcon.classList.add('tw-i-glob', 'tw-text-2xl', 'tw-text-gray', 'tw-ml-2');

      this.#langButton.appendChild(this.#langShort);
      this.#langButton.appendChild(worldIcon);
      this.#langButton.addEventListener('click', this.#openLangMenu);

      this.#langMenu = new Menu({
        ref: this.#langButton,
        content: langMenu,
        classes: ['tw-w-52'],
        popperOptions: { placement: 'bottom-end' },
      });
      this.#langMenu.onClose = this.#closeMenu;
      this.#langMenu.onSelected = this.#langSelected;

      this.#menuContainer.appendChild(this.#langButton);
    }

    if (userMenu) {
      this.#avatarButton = document.createElement('button');
      this.#avatarButton.classList.add('tw-btn', 'tw-topbar-avatar');

      if (userMenu.user) {
        const avatarText = document.createElement('p');
        avatarText.innerText = (initials(userMenu.user.name || userMenu.user.email) as string).toUpperCase();

        this.#avatarButton.appendChild(avatarText);
      } else {
        const avatarIcon = document.createElement('div');
        avatarIcon.classList.add('tw-i-accounts', 'tw-text-gray', 'tw-text-xl');

        this.#avatarButton.appendChild(avatarIcon);
      }

      this.#avatarButton.addEventListener('click', this.#openAvatarMenu);

      this.#avatarMenu = new Menu({
        ref: this.#avatarButton,
        content: userMenu.menu,
        classes: ['tw-w-52'],
        popperOptions: { placement: 'bottom-end' },
      });
      this.#avatarMenu.onClose = this.#closeMenu;
      this.#avatarMenu.onSelected = this.#userSelected;

      this.#menuContainer.appendChild(this.#avatarButton);
    }

    this.#container.appendChild(this.#contentTitle);
    this.#container.appendChild(this.#menuContainer);
  }

  #openLangMenu = (): void => {
    if (this.#langMenu) this.#langMenu.open = true;
  };

  #openAvatarMenu = (): void => {
    if (this.#avatarMenu) this.#avatarMenu.open = true;
  };

  #closeMenu = (): void => {
    if (this.#langMenu) this.#langMenu.open = false;
    if (this.#avatarMenu) this.#avatarMenu.open = false;
  };

  #langSelected = (id: string | number): void => {
    if (this.#langShort) this.#langShort.innerText = this.#langMenuList[id].short.toUpperCase();

    if (this.onLangSelected) this.onLangSelected(id);
  };

  #userSelected = (id: string | number): void => {
    if (this.onUserSelected) this.onUserSelected(id);
  };

  #clickBackHandle = (): void => {
    if (this.onBack) this.onBack();
  };

  destroy(): void {
    if (this.#langMenu) this.#langMenu.destroy();
    if (this.#avatarMenu) this.#avatarMenu.destroy();

    if (this.#avatarButton) this.#avatarButton.removeEventListener('click', this.#openAvatarMenu);
    if (this.#backButton) this.#backButton.removeEventListener('click', this.#clickBackHandle);
    if (this.#langButton) this.#langButton.removeEventListener('click', this.#openLangMenu);

    while (this.#container.children.length > 0) this.#container.removeChild(this.#container.children[0]);
  }
}

export { Topbar };
