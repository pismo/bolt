export interface IModalConstructor {
  new (modalContent: HTMLElement): IModal;
}

export interface IModal {
  isOpen: boolean;
  onClose?: () => void;
  onStartOpen?: () => void;
  onEndOpen?: () => void;
  onStartClose?: () => void;
  onEndClose?: () => void;
  readonly destroy: () => void;
}

class Modal implements IModal {
  #_isOpen = false;

  #_container: HTMLElement;

  #_modalContent: HTMLElement;

  #_backdrop: HTMLElement;

  onClose?: () => void;

  onStartOpen?: () => void;

  onEndOpen?: () => void;

  onStartClose?: () => void;

  onEndClose?: () => void;

  constructor(modalContent: HTMLElement) {
    this.#_modalContent = modalContent;

    this.#_container = document.createElement("div");
    this.#_backdrop = document.createElement("div");
    this.#_backdrop.dataset.testid = "backdrop";

    this.#initialize();
  }

  get isOpen(): boolean {
    return this.#_isOpen;
  }

  set isOpen(value: boolean) {
    this.#_isOpen = value;

    if (value) {
      this.#open();
      return;
    }

    this.#close();
  }

  #initialize = (): void => {
    this.#_container.appendChild(this.#_modalContent);
    document.body.appendChild(this.#_backdrop);
    document.body.appendChild(this.#_container);

    this.#_modalContent.style.display = "none";
    this.#_container.style.display = "none";
    this.#_backdrop.style.display = "none";

    this.#_container.classList.add("modal");
    this.#_container.classList.add("modal-close");

    this.#_backdrop.classList.add("modal-backdrop");
    this.#_backdrop.classList.add("modal-backdrop-close");
    this.#_backdrop.addEventListener("click", this.#handleClose);

    this.#_modalContent.classList.add("modal-content");

    setTimeout(() => {
      this.#_container.style.removeProperty("display");
      this.#_backdrop.style.removeProperty("display");
      this.#_modalContent.style.removeProperty("display");
    }, 300);
  };

  #open = (): void => {
    this.#_backdrop.addEventListener("transitionstart", this.#startAnimationOpen);
    this.#_container.addEventListener("transitioncancel", this.#endAnimationOpen);
    this.#_container.addEventListener("transitionend", this.#endAnimationOpen);

    this.#_backdrop.classList.remove("modal-backdrop-close");
    this.#_backdrop.classList.add("modal-backdrop-open");

    this.#_container.classList.remove("modal-close");
    this.#_container.classList.add("modal-open");
  };

  #close = (): void => {
    this.#_container.addEventListener("transitionstart", this.#startAnimationClose);
    this.#_backdrop.addEventListener("transitioncancel", this.#endAnimationClose);
    this.#_backdrop.addEventListener("transitionend", this.#endAnimationClose);

    this.#_backdrop.classList.remove("modal-backdrop-open");
    this.#_backdrop.classList.add("modal-backdrop-close");

    this.#_container.classList.remove("modal-open");
    this.#_container.classList.add("modal-close");
  };

  #removeAnimationEvent = (): void => {
    this.#_backdrop.removeEventListener("transitionstart", this.#startAnimationOpen);
    this.#_container.removeEventListener("transitioncancel", this.#endAnimationOpen);
    this.#_container.removeEventListener("transitionend", this.#endAnimationOpen);

    this.#_container.removeEventListener("transitionstart", this.#startAnimationClose);
    this.#_backdrop.removeEventListener("transitioncancel", this.#endAnimationClose);
    this.#_backdrop.removeEventListener("transitionend", this.#endAnimationClose);
  };

  #startAnimationOpen = (): void => {
    this.#_backdrop.removeEventListener("transitionstart", this.#startAnimationOpen);

    if (this.onStartOpen) this.onStartOpen();
  };

  #endAnimationOpen = (): void => {
    this.#removeAnimationEvent();

    if (this.onEndOpen) this.onEndOpen();
  };

  #startAnimationClose = (): void => {
    this.#_container.removeEventListener("transitionstart", this.#startAnimationClose);

    if (this.onStartClose) this.onStartClose();
  };

  #endAnimationClose = (): void => {
    this.#removeAnimationEvent();

    if (this.onEndClose) this.onEndClose();
  };

  #handleClose = (): void => {
    if (this.onClose) this.onClose();
  };

  readonly destroy = (): void => {
    this.#_container.removeChild(this.#_modalContent);
    const p: HTMLElement = this.#_container.parentElement as HTMLElement;
    p.removeChild(this.#_backdrop);
    p.removeChild(this.#_container);
    this.#_backdrop.removeEventListener("click", this.#handleClose);
  };
}

export { Modal };
