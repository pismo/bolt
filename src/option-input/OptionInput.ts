import sum from 'hash-sum';

export interface IOptionInputDataset {
  type: 'radio' | 'checkbox';
  checked: boolean;
  label?: string;
  value?: any;
  color?: 'primary' | 'secondary';
  clean?: boolean;
}

export interface IOptionInputRef extends HTMLElement {
  dataset: Partial<Record<keyof IOptionInputDataset, string>>;
}

export interface IOptionInputProps {
  ref: IOptionInputRef;
}

export interface IOptionInputConstructor {
  new (props: IOptionInputProps): IOptionInput;
}

export interface IOptionInputChange {
  value: any;
  checked: boolean;
}

export interface IOptionInput {
  readonly destroy: () => void;

  onChange?: (ev: IOptionInputChange) => void;
}

class OptionInput implements IOptionInput {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  #id: string = sum(new Date().getMilliseconds() + Math.random() * 1000) as string;

  #validTypes: string[] = ['radio', 'checkbox', 'label'];

  #validColors: string[] = ['primary', 'secondary', 'error'];

  #container: HTMLElement;

  #input: HTMLInputElement;

  #label: HTMLLabelElement;

  #labelText: HTMLSpanElement;

  #optionInput: HTMLElement;

  #observer: MutationObserver;

  onChange?: (ev: IOptionInputChange) => void;

  constructor({ ref }: IOptionInputProps) {
    this.#container = ref;
    this.#container.classList.add('tw-option-input');

    this.#optionInput = document.createElement('div');

    this.#labelText = document.createElement('span');

    this.#input = document.createElement('input');
    this.#input.id = this.#id;

    this.#label = document.createElement('label');
    this.#label.htmlFor = this.#id;

    this.#label.appendChild(this.#optionInput);

    this.#container.appendChild(this.#input);
    this.#container.appendChild(this.#label);

    this.#input.addEventListener('change', this.#changeInputHandler);

    const options = this.#container.dataset;
    Object.keys(options).forEach((key) => {
      this.#updateOptions(key, options as unknown as IOptionInputDataset);
    });

    this.#observer = new MutationObserver(this.#changeDataSet);
    this.#observer.observe(this.#container, { attributes: true });
  }

  #changeDataSet = (mutations: MutationRecord[]): void => {
    mutations.forEach((mut) => {
      const key = (mut.attributeName as string).replace('data-', '');
      const options = this.#container.dataset;
      this.#updateOptions(key, options as unknown as IOptionInputDataset);
    });
  };

  #updateOptions = (key: string, options: IOptionInputDataset): void => {
    if (!options.type || !this.#validTypes.includes(options.type)) {
      this.#input.type = 'text';
    }

    if (!options.checked) {
      this.#label.classList.remove('tw-option-input-checked');
    }

    if (!options.clean) {
      this.#label.classList.remove('tw-option-input-color');
    }

    const ownColorClass = {
      primary: 'tw-option-input-color-primary',
      secondary: 'tw-option-input-color-secondary',
      error: 'tw-option-input-color-error',
    };

    switch (key) {
      case 'type':
        if (this.#validTypes.includes(options[key])) {
          this.#input.type = options[key];

          this.#optionInput.classList.remove(...Array.from(this.#optionInput.classList));
          this.#optionInput.classList.add('tw-option-input-option');

          const ownClass = {
            radio: 'tw-option-input-radio',
            checkbox: 'tw-option-input-checkbox',
          };

          this.#optionInput.classList.add(ownClass[options[key]]);
        }
        break;
      case 'label':
        this.#label.appendChild(this.#labelText);
        this.#labelText.innerText = options[key] as string;
        break;
      case 'checked':
        if (this.#validTypes.includes(this.#input.type)) {
          if (String(options[key]) === 'true') {
            this.#label.classList.add('tw-option-input-checked');
            this.#input.checked = true;
          } else {
            this.#label.classList.remove('tw-option-input-checked');
            this.#input.checked = false;
          }
        }
        break;
      case 'color':
        Object.values(ownColorClass).forEach((val) => this.#label.classList.remove(val));

        if (this.#validColors.includes(options[key] as string)) {
          this.#label.classList.add(ownColorClass[options[key] as string]);
        }
        break;
      case 'clean':
        this.#label.classList.add('tw-option-input-color');
        break;
      default:
    }
  };

  #changeInputHandler = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    if (this.onChange) this.onChange({ value: this.#container.dataset.value, checked: target.checked });
  };

  destroy(): void {
    this.#observer.disconnect();
    this.#input.removeEventListener('change', this.#changeInputHandler);
    while (this.#container.children.length > 0) this.#container.removeChild(this.#container.lastChild as ChildNode);
  }
}

export { OptionInput };
