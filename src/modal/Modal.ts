class Modal {
  #_isOpen = false

  #_container

  #_el

  #_backdrop

  onClose = () => {}

  constructor(el) {
    this.initialize(el);
  }

  get isOpen() {
    return this.#_isOpen;
  }

  set isOpen(value) {
    this.#_isOpen = value;

    if (value) {
      this.open();
      return;
    }

    this.close();
  }

  initialize = (el) => {
    this.#_el = el;

    this.#_container = document.createElement('div');
    this.#_backdrop = document.createElement('div');

    this.#_container.appendChild(this.#_el);
    document.body.appendChild(this.#_backdrop);
    document.body.appendChild(this.#_container);

    this.#_el.style.display = 'none';
    this.#_container.style.display = 'none';
    this.#_backdrop.style.display = 'none';

    this.#_container.classList.add('modal');
    this.#_container.classList.add('modal-close');

    this.#_backdrop.classList.add('modal-backdrop');
    this.#_backdrop.classList.add('modal-backdrop-close');
    this.#_backdrop.addEventListener('click', this.handleClose);

    this.#_el.classList.add('modal-content');

    setTimeout(() => {
      this.#_container.style.removeProperty('display');
      this.#_backdrop.style.removeProperty('display');
      this.#_el.style.removeProperty('display');
    }, 300);
  }

  open = () => {
    this.#_backdrop.classList.remove('modal-backdrop-close');
    this.#_backdrop.classList.add('modal-backdrop-open');

    this.#_container.classList.remove('modal-close');
    this.#_container.classList.add('modal-open');
  }

  close = () => {
    this.#_backdrop.classList.remove('modal-backdrop-open');
    this.#_backdrop.classList.add('modal-backdrop-close');

    this.#_container.classList.remove('modal-open');
    this.#_container.classList.add('modal-close');
  }

  handleClose = () => {
    if (this.onClose) {
      this.onClose()
    }
  }

  destroy = () => {
    this.#_container.removeChild(this.#_el);
    const p = this.#_container.parentElement;
    p.removeChild(this.#_backdrop);
    p.removeChild(this.#_container);
    this.#_backdrop.removeEventListener('click', this.handleClose);
    this.#_backdrop = null;
    this.#_container = null;
  }
}

export { Modal };
