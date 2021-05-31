export interface DayProps {
  container: HTMLElement;
  text: string;
  extraText?: string;
  active?: boolean;
  classes?: string[];
}

export interface IDayConstructor {
  new (props: DayProps): IDay;
}

export interface IDay {
  active: boolean;
  readonly destroy: () => void;

  onClick?: () => void;
}

class Day implements IDay {
  #container: HTMLElement;

  #day: HTMLDivElement;

  #text: HTMLParagraphElement;

  #extraText: HTMLSpanElement;

  #active = false;

  onClick?: () => void;

  constructor({ container, text, classes = [], extraText = '', active }: DayProps) {
    this.#container = container;
    this.#container.classList.add('tw-day-container');

    this.#day = document.createElement('div');
    this.#day.classList.add('tw-day', ...classes);

    this.#text = document.createElement('p');
    this.#text.innerText = text;

    this.#extraText = document.createElement('span');
    this.#extraText.classList.add('tw-day-extratext');
    this.#extraText.innerText = extraText;

    this.#day.appendChild(this.#text);
    this.#day.appendChild(this.#extraText);

    this.#container.appendChild(this.#day);

    this.#day.addEventListener('click', this.#clickHandler);

    this.active = Boolean(active);
  }

  get active(): boolean {
    return this.#active;
  }

  set active(value: boolean) {
    if (value) {
      this.#day.classList.add('tw-day-active');
    } else {
      this.#day.classList.remove('tw-day-active');
    }

    this.#active = Boolean(value);
  }

  #clickHandler = (): void => {
    if (this.onClick) this.onClick();
  };

  destroy(): void {
    this.#container.removeChild(this.#day);

    this.#day.removeEventListener('click', this.#clickHandler);
  }
}

export { Day };
