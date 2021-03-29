class Input {
  #container: HTMLElement;

  constructor(ref: HTMLElement) {
    console.log(ref);

    this.#container = ref;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mut) => {
        if (mut.type === 'attributes') {
          console.log('att changed');
          console.log(mut);
        }
      });
    });

    observer.observe(this.#container, { attributes: true });

    const input = document.createElement('input');
    ref.appendChild(input);
  }

  destroy = () => {
    Array.from(this.#container.children).forEach((el) => {
      this.#container.removeChild(el);
    });
  };
}

export { Input };
