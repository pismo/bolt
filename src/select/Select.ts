import { Input, IInputDataset } from '../input/Input';
import { IMenuContent, Menu } from '../menu/Menu';

export interface ISelectOption extends IMenuContent {
  id: number;
}

export interface ISelectDataset
  extends Pick<IInputDataset, 'name' | 'label' | 'helpertext' | 'error' | 'disabled' | 'value'> {
  options: string | ISelectOption[];
}

export interface ISelectRef extends HTMLElement {
  dataset: Partial<Record<keyof ISelectDataset, string>>;
}

export interface ISelectProps {
  ref: ISelectRef;
  menuClasses?: string[];
}

export interface ISelectConstructor {
  new (props: ISelectProps): ISelect;
}

export interface ISelect {
  readonly destroy: () => void;

  onSelect?: (selected: ISelectOption) => void;
}

class Select implements ISelect {
  #VALID_OPTIONS = {
    name: 'name',
    label: 'label',
    helpertext: 'helpertext',
    error: 'error',
    disabled: 'disabled',
    value: 'value',
    options: 'options',
  };

  #select: HTMLElement;

  #inputContainer: HTMLElement;

  #input: Input;

  #observer: MutationObserver;

  #menu?: Menu;

  #menuClasses: string[];

  #options: ISelectOption[] = [];

  #selectedIndex = 0;

  #style: HTMLStyleElement;

  onSelect?: (selected: ISelectOption) => void;

  constructor({ ref, menuClasses = [] }: ISelectProps) {
    this.#select = ref;
    this.#menuClasses = menuClasses;

    this.#inputContainer = document.createElement('div');
    this.#inputContainer.dataset.endicon = 'chevron-down';

    this.#input = new Input(this.#inputContainer);
    this.#input.onChange = this.#changeInputValue;
    this.#input.onFocus = this.#onFocusInputHandle;
    this.#input.onEndIconClick = this.#onFocusInputHandle;

    this.#style = document.createElement('style');
    this.#style.innerHTML = `.tw-select-dynamic-width {width: ${this.#inputContainer.clientWidth}px;}`;
    document.getElementsByTagName('head')[0].appendChild(this.#style);

    const options = this.#select.dataset;

    Object.keys(options).forEach((key) => {
      this.#updateOptions(key, options as unknown as ISelectDataset);
    });

    this.#observer = new MutationObserver(this.#changeDataSet);
    this.#observer.observe(this.#select, { attributes: true });

    this.#select.appendChild(this.#inputContainer);
  }

  #changeDataSet = (mutations: MutationRecord[]): void => {
    mutations.forEach((mut) => {
      const key = (mut.attributeName as string).replace('data-', '');
      const options = this.#select.dataset;
      this.#updateOptions(key, options as unknown as ISelectDataset);
    });
  };

  #updateOptions = (key: string, options: ISelectDataset): void => {
    if (!this.#VALID_OPTIONS[key]) return;
    switch (key) {
      case 'options':
        this.#createMenu(JSON.parse(options[key] as string));
        break;
      case 'value':
        this.#setValue(options[key] as unknown as number);
        break;
      default:
        this.#inputContainer.dataset[key] = options[key] as string;
    }
  };

  #setValue = (index: number): void => {
    this.#selectedIndex = index;
    const selected: ISelectOption = this.#options[index];
    this.#inputContainer.dataset.value = typeof selected.label === 'string' ? selected.label : selected.label.first;
    if (this.#menu) this.#menu.selected = index;
  };

  #createMenu = (options: ISelectOption[]): void => {
    if (this.#menu) {
      this.#menu.destroy();
    }

    const content = options.map((option, index) => {
      return {
        label: option.label,
        id: option.id,
        selected: this.#selectedIndex === index,
        disabled: Boolean(option.disabled),
      };
    });

    this.#menu = new Menu({
      ref: this.#inputContainer,
      content,
      classes: ['tw-rounded-md', ...this.#menuClasses, 'tw-select-dynamic-width'],
      arrow: false,
      color: 'secondary',
      popperOptions: {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
      },
    });

    this.#menu.onClose = this.#closeMenu;
    this.#menu.onSelected = this.#onSelectedHandle;

    this.#options = [...options];
  };

  #changeInputValue = (): void => {
    const selected = this.#options[this.#selectedIndex];
    this.#inputContainer.dataset.value = typeof selected.label === 'string' ? selected.label : selected.label.first;
  };

  #onFocusInputHandle = (): void => {
    this.#input.blur();
    this.#inputContainer.dataset.endicon = 'chevron-up';
    this.#style.innerHTML = `.tw-select-dynamic-width {width: ${this.#inputContainer.clientWidth}px;}`;
    if (this.#menu) this.#menu.open = true;
  };

  #closeMenu = (): void => {
    if (this.#menu) this.#menu.open = false;
    this.#inputContainer.dataset.endicon = 'chevron-down';
  };

  #onSelectedHandle = (id: number | string): void => {
    if (this.onSelect) this.onSelect(this.#options[id]);
    else this.#setValue(id as number);
  };

  destroy(): void {
    this.#observer.disconnect();
    if (this.#menu) this.#menu.destroy();
    this.#input.destroy();
    document.getElementsByTagName('head')[0].removeChild(this.#style);
    while (this.#select.children.length > 0)
      this.#select.removeChild(this.#select.children[this.#select.children.length - 1]);
  }
}

export { Select };
