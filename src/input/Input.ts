export interface IInputDataset {
  name?: string;
  label?: string;
  type?: string;
  helpertext?: string;
  starticon?: string;
  endicon?: string;
  clearicon?: string;
  error?: boolean;
  disabled?: boolean;
  max?: number;
  maxlength?: number;
  min?: number;
  step?: number;
  value?: string;
}

export interface IRef extends HTMLElement {
  dataset: Partial<Record<keyof IInputDataset, string>>;
}

export interface IInputConstructor {
  new (ref: IRef): IInput;
}

export interface IInput {
  readonly destroy: () => void;
  readonly focus: () => void;
  readonly blur: () => void;

  onChange?: (ev: InputEvent) => void;
  onFocus?: (ev: InputEvent) => void;
  onBlur?: (ev: InputEvent) => void;
  onStartIconClick?: (ev: MouseEvent) => void;
  onEndIconClick?: (ev: MouseEvent) => void;
}

class Input implements IInput {
  #container: HTMLElement;

  #containerInput: HTMLElement;

  #input: HTMLInputElement;

  #label: HTMLElement;

  #helperText: HTMLElement;

  #startIcon: HTMLElement;

  #containerEndIcon: HTMLElement;

  #endIcon: HTMLElement;

  #clearIcon: HTMLElement;

  #observer: MutationObserver;

  #validTypes: string[] = ['number', 'password', 'text'];

  #validAttr: string[] = ['max', 'maxlength', 'min', 'step', 'name'];

  onChange?: (ev: InputEvent) => void;

  onFocus?: (ev: InputEvent) => void;

  onBlur?: (ev: InputEvent) => void;

  onStartIconClick?: (ev: Event) => void;

  onEndIconClick?: (ev: Event) => void;

  constructor(ref: IRef) {
    this.#container = ref;
    this.#container.classList.add('tw-input-container');

    this.#label = document.createElement('label');
    this.#label.classList.add('tw-input-label');

    this.#containerInput = document.createElement('div');
    this.#containerInput.classList.add('tw-input-containerInput');

    this.#input = document.createElement('input');
    this.#input.classList.add('tw-input');

    this.#helperText = document.createElement('p');
    this.#helperText.classList.add('tw-input-helperText');

    this.#startIcon = document.createElement('div');
    this.#startIcon.classList.add('tw-input-startIcon');

    this.#containerEndIcon = document.createElement('div');
    this.#containerEndIcon.classList.add('tw-input-endIcon');

    this.#endIcon = document.createElement('div');

    this.#clearIcon = document.createElement('div');
    this.#clearIcon.classList.add('tw-i-close', 'tw-input-clearIcon');

    const options = this.#container.dataset;

    Object.keys(options).forEach((key) => {
      this.#updateOptions(key, options);
    });

    this.#container.appendChild(this.#label);
    this.#containerInput.appendChild(this.#input);
    this.#container.appendChild(this.#containerInput);
    this.#container.appendChild(this.#helperText);

    this.#observer = new MutationObserver(this.#changeDataSet);

    this.#observer.observe(this.#container, { attributes: true });
    this.#input.addEventListener('input', this.#handleChange);
    this.#input.addEventListener('focus', this.#handleFocus);
    this.#input.addEventListener('blur', this.#handleBlur);
  }

  #changeDataSet = (mutations: MutationRecord[]): void => {
    mutations.forEach((mut) => {
      const key = (mut.attributeName as string).replace('data-', '');
      const options = this.#container.dataset;
      this.#updateOptions(key, (options as unknown) as IInputDataset);
    });
  };

  #updateOptions = (key: string, options: IInputDataset): void => {
    switch (key) {
      case 'label':
        this.#label.innerText = options.label ?? '';
        break;
      case 'helpertext':
        this.#helperText.innerText = options.helpertext ?? '';
        break;

      case 'disabled':
        if (String(options.disabled) === 'true') {
          this.#input.setAttribute('disabled', 'true');
        } else {
          this.#input.removeAttribute('disabled');
        }
        break;
      case 'error':
        if (String(options.error) === 'true' && (!options.disabled || String(options.disabled) === 'false')) {
          this.#input.classList.add('tw-input-error');
          this.#label.classList.add('tw-input-element-error');
          this.#helperText.classList.add('tw-input-element-error');
          this.#startIcon.classList.add('tw-input-element-error');
          this.#containerEndIcon.classList.add('tw-input-element-error');
        } else {
          this.#input.classList.remove('tw-input-error');
          this.#label.classList.remove('tw-input-element-error');
          this.#helperText.classList.remove('tw-input-element-error');
          this.#startIcon.classList.remove('tw-input-element-error');
          this.#containerEndIcon.classList.remove('tw-input-element-error');
        }
        break;
      case 'value':
        if (typeof options.value === 'string') {
          this.#input.value = options.value ?? '';
        }
        break;
      case 'starticon':
        this.#startIcon.classList.add(`tw-i-${options.starticon as string}`);
        this.#startIcon.addEventListener('click', this.#statIconHandleClick);
        this.#input.classList.add('tw-input-startIcon-padding');
        if (!this.#startIcon.parentElement) {
          this.#containerInput.appendChild(this.#startIcon);
        }
        break;
      case 'endicon':
        this.#endIcon.classList.remove(...Array.from(this.#endIcon.classList));
        this.#endIcon.classList.add(`tw-i-${options.endicon as string}`);
        this.#input.classList.add('tw-input-endIcon-single-padding');
        this.#input.classList.add('tw-input-endIcon-double-padding');
        this.#endIcon.addEventListener('click', this.#endIconHandleClick);

        if (!this.#endIcon.parentElement) {
          this.#containerEndIcon.appendChild(this.#endIcon);
        }

        if (!this.#containerEndIcon.parentElement) {
          this.#containerInput.appendChild(this.#containerEndIcon);
        }
        break;
      case 'clearicon':
        if (options.clearicon === 'true') {
          this.#input.classList.add('tw-input-endIcon-single-padding');
          this.#input.classList.add('tw-input-endIcon-double-padding');

          this.#clearIcon.addEventListener('click', this.#handleClear);

          if (!this.#clearIcon.parentElement)
            this.#containerEndIcon.insertBefore(this.#clearIcon, this.#containerEndIcon.firstChild);

          if (!this.#containerEndIcon.parentElement) {
            this.#containerInput.appendChild(this.#containerEndIcon);
          }
        } else {
          this.#containerEndIcon.removeChild(this.#clearIcon);
          this.#clearIcon.removeEventListener('click', this.#handleClear);
        }
        break;
      case 'type':
        if (this.#validTypes.includes(String(options.type))) this.#input.setAttribute('type', options.type as string);
        break;
      default:
        if (this.#validAttr.includes(key)) this.#input.setAttribute(key, options[key]);
    }

    if (!options.starticon) {
      if (this.#startIcon.parentElement) this.#containerInput.removeChild(this.#startIcon);
      this.#input.classList.remove('tw-input-startIcon-padding');
      this.#startIcon.removeEventListener('click', this.#statIconHandleClick);
    }

    if (!options.clearicon) {
      this.#input.classList.remove('tw-input-endIcon-double-padding');
      if (this.#clearIcon.parentElement) this.#containerEndIcon.removeChild(this.#clearIcon);
    }

    if (!options.endicon) {
      this.#input.classList.remove('tw-input-endIcon-double-padding');
      if (this.#endIcon.parentElement) this.#containerEndIcon.removeChild(this.#endIcon);
      this.#endIcon.removeEventListener('click', this.#endIconHandleClick);
    }

    if (!options.clearicon && !options.endicon) {
      if (this.#containerEndIcon.parentElement) this.#containerInput.removeChild(this.#containerEndIcon);
      if (this.#endIcon.parentElement) this.#containerEndIcon.removeChild(this.#endIcon);
      if (this.#clearIcon.parentElement) this.#containerEndIcon.removeChild(this.#clearIcon);
      this.#input.classList.remove('tw-input-endIcon-single-padding');
      this.#input.classList.remove('tw-input-endIcon-double-padding');
      this.#clearIcon.removeEventListener('click', this.#handleClear);
      this.#endIcon.removeEventListener('click', this.#endIconHandleClick);
    }
  };

  #handleChange = (e: Event): void => {
    if (this.onChange) this.onChange(e as InputEvent);
  };

  #handleFocus = (e: Event): void => {
    this.#startIcon.classList.add('tw-input-focus');
    this.#containerEndIcon.classList.add('tw-input-focus');

    if (this.onFocus) this.onFocus(e as InputEvent);
  };

  #handleBlur = (e: Event): void => {
    this.#startIcon.classList.remove('tw-input-focus');
    this.#containerEndIcon.classList.remove('tw-input-focus');

    if (this.onBlur) this.onBlur(e as InputEvent);
  };

  #handleClear = (e: Event): void => {
    this.#input.value = '';
    if (this.onChange) this.onChange(e as InputEvent);
  };

  #statIconHandleClick = (e: Event): void => {
    if (this.onStartIconClick) this.onStartIconClick(e);
  };

  #endIconHandleClick = (e: Event): void => {
    if (this.onEndIconClick) this.onEndIconClick(e);
  };

  readonly focus = (): void => {
    this.#input.focus();
  };

  readonly blur = (): void => {
    this.#input.blur();
  };

  readonly destroy = (): void => {
    this.#observer.disconnect();
    this.#input.removeEventListener('input', this.#handleChange);
    this.#input.removeEventListener('focus', this.#handleFocus);
    this.#input.removeEventListener('blur', this.#handleBlur);
    this.#clearIcon.removeEventListener('click', this.#handleClear);
    this.#startIcon.removeEventListener('click', this.#statIconHandleClick);
    this.#endIcon.removeEventListener('click', this.#endIconHandleClick);
    while (this.#container.children.length > 0)
      this.#container.removeChild(this.#container.children[this.#container.children.length - 1]);
  };
}

export { Input };
