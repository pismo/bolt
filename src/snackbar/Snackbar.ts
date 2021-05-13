export interface SnackbarProps {
  autoClose?: boolean;
  timeToClose?: number;
}

export interface ISnackbarConstructor {
  new (props?: SnackbarProps): ISnackbar;
}

export type VariantType = 'success' | 'error';

export interface ISnackbar {
  label: string;
  variant: VariantType;
  open: boolean;
  readonly destroy: () => void;

  onClose?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}

class Snackbar implements ISnackbar {
  #container: HTMLElement;

  #background: HTMLElement;

  #message: HTMLElement;

  #text: HTMLParagraphElement;

  #close: HTMLButtonElement;

  #label = '';

  #open = false;

  #variant: VariantType = 'success';

  #acceptVariant: { success: string; error: string } = {
    success: 'tw-snackbar-message-success',
    error: 'tw-snackbar-message-error',
  };

  #autoClose: boolean;

  #timeToClose: number;

  #timeout?: NodeJS.Timeout;

  onClose?: () => void;

  onOpen?: () => void;

  onClosed?: () => void;

  constructor(props: SnackbarProps = {}) {
    const { autoClose = true, timeToClose = 6000 } = props;
    this.#autoClose = autoClose;
    this.#timeToClose = timeToClose;

    this.#container = document.createElement('div');
    this.#container.classList.add('tw-snackbar', 'tw-snackbar-closed');

    this.#background = document.createElement('div');
    this.#background.classList.add('tw-snackbar-background');

    this.#message = document.createElement('div');
    this.#message.classList.add('tw-snackbar-message');

    this.#text = document.createElement('p');
    this.#text.classList.add('tw-snackbar-message-label');

    this.#close = document.createElement('button');
    this.#close.classList.add('tw-i-close');

    this.#message.appendChild(this.#text);
    this.#message.appendChild(this.#close);

    this.#container.appendChild(this.#background);
    this.#container.appendChild(this.#message);
    document.body.appendChild(this.#container);
  }

  get label(): string {
    return this.#label;
  }

  set label(value: string) {
    this.#label = value || '';
    this.#text.innerText = this.#label;
  }

  get variant(): VariantType {
    return this.#variant;
  }

  set variant(value: VariantType) {
    this.#message.classList.remove(...Object.values(this.#acceptVariant));
    if (this.#acceptVariant[value]) {
      this.#variant = value;
      this.#message.classList.add(this.#acceptVariant[value]);
    }
  }

  get open(): boolean {
    return this.#open;
  }

  set open(value: boolean) {
    if (value) {
      this.#container.addEventListener('animationcancel', this.#handleOpened);
      this.#container.addEventListener('animationend', this.#handleOpened);

      this.#container.classList.remove('tw-snackbar-closed', 'tw-snackbar-closing');
    } else {
      this.#container.addEventListener('transitioncancel', this.#handleClosed);
      this.#container.addEventListener('transitionend', this.#handleClosed);

      this.#container.classList.add('tw-snackbar-closing');
    }

    this.#open = Boolean(value);
  }

  #handleOpened = (): void => {
    this.#container.removeEventListener('animationcancel', this.#handleOpened);
    this.#container.removeEventListener('animationend', this.#handleOpened);

    this.#background.addEventListener('click', this.#onClose);
    this.#close.addEventListener('click', this.#onClose);

    if (this.onOpen) this.onOpen();

    if (this.#autoClose) {
      if (this.#timeout) clearTimeout(this.#timeout);
      this.#timeout = setTimeout(() => {
        if (this.onClose) this.onClose();
      }, this.#timeToClose);
    }
  };

  #handleClosed = (): void => {
    this.#container.removeEventListener('transitioncancel', this.#handleClosed);
    this.#container.removeEventListener('transitionend', this.#handleClosed);

    this.#container.classList.add('tw-snackbar-closed');
    this.#container.classList.remove('tw-snackbar-closing');

    if (this.onClosed) this.onClosed();
  };

  #onClose = (): void => {
    if (this.#timeout) clearTimeout(this.#timeout);

    this.#background.removeEventListener('click', this.#onClose);
    this.#close.removeEventListener('click', this.#onClose);

    if (this.onClose) this.onClose();
  };

  readonly destroy = (): void => {
    if (this.#timeout) clearTimeout(this.#timeout);

    this.#container.removeEventListener('transitioncancel', this.#handleClosed);
    this.#container.removeEventListener('transitionend', this.#handleClosed);
    this.#container.removeEventListener('animationcancel', this.#handleOpened);
    this.#container.removeEventListener('animationend', this.#handleOpened);
    this.#background.removeEventListener('click', this.#onClose);
    this.#close.removeEventListener('click', this.#onClose);

    document.body.removeChild(this.#container);
  };
}

export { Snackbar };
