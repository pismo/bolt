export interface IStop {
  label: string;
  done?: boolean;
}

export interface IStationDataset {
  stops: IStop[];
}

export interface IStationRef extends HTMLElement {
  dataset: Partial<Record<keyof IStationDataset, string>>;
}

export interface IStationProps {
  ref: IStationRef;
}

export interface IStationConstructor {
  new (props: IStationProps): IStation;
}

export interface IStation {
  readonly destroy: () => void;
}

class Station implements IStation {
  #BALL_SIZE = 30;

  #container: HTMLElement;

  #stopsContainer: HTMLElement;

  #observer: MutationObserver;

  #resizeObserver: ResizeObserver;

  #stops: HTMLElement[] = [];

  #bars: HTMLElement[] = [];

  #observerStopsInterval: NodeJS.Timeout | null = null;

  #currentWidth = 0;

  constructor({ ref }: IStationProps) {
    this.#container = ref;
    this.#container.classList.add('station');

    this.#stopsContainer = document.createElement('div');
    this.#stopsContainer.classList.add('station-stop-container');

    this.#container.appendChild(this.#stopsContainer);

    const options = this.#container.dataset as unknown as IStationDataset;

    Object.keys(options).forEach((key) => {
      this.#updateOptions(key, options);
    });

    this.#observer = new MutationObserver(this.#changeDataSet);

    this.#observer.observe(this.#container, { attributes: true });

    this.#currentWidth = this.#container.getBoundingClientRect().width;

    this.#resizeObserver = new ResizeObserver((entries) => {
      const { contentRect } = entries[0];

      if (contentRect.width !== this.#currentWidth) {
        this.#currentWidth = contentRect.width;

        this.#readyToCalcBar();
      }
    });

    this.#resizeObserver.observe(this.#container);
  }

  #changeDataSet = (mutations: MutationRecord[]): void => {
    mutations.forEach((mut) => {
      const key = (mut.attributeName as string).replace('data-', '');
      const options = this.#container.dataset;
      this.#updateOptions(key, options as unknown as IStationDataset);
    });
  };

  #updateOptions = (key: string, options: IStationDataset): void => {
    let stops: IStop[];
    switch (key) {
      case 'stops':
        stops = JSON.parse(options.stops as unknown as string) as IStop[];
        this.#stopsContainer.innerHTML = '';
        this.#stops = [];
        this.#bars = [];
        if (this.#observerStopsInterval) {
          clearInterval(this.#observerStopsInterval);
          this.#observerStopsInterval = null;
        }

        stops.forEach((item, i) => {
          const stop = document.createElement('div');
          const ball = document.createElement('div');
          const label = document.createElement('p');

          stop.classList.add('station-stop');
          ball.classList.add('station-stop-ball');
          label.classList.add('station-stop-label');
          label.innerText = item.label;

          if (item.done) {
            stop.classList.add('station-stop-done');
          }

          if (i === stops.length - 1) {
            stop.classList.add('station-stop-last');
          }

          stop.appendChild(ball);
          stop.appendChild(label);

          this.#stopsContainer.appendChild(stop);
          this.#stops.push(ball);

          if (i > 0) {
            const bar = document.createElement('div');
            bar.classList.add('station-line');

            const before = this.#stops[i - 1];

            if (before.parentElement?.classList.contains('station-stop-done')) {
              bar.classList.add('station-stop-done');
            }

            this.#stopsContainer.appendChild(bar);
            this.#bars.push(bar);
          }
        });

        this.#observerStopsInterval = setInterval(this.#readyToCalcBar, 1000 / 60);
        break;
      default:
    }
  };

  #readyToCalcBar = (): void => {
    let test = true;

    this.#stops.some((stop) => {
      const bounds = stop.getBoundingClientRect();

      if (bounds.width !== this.#BALL_SIZE) {
        test = false;
        return true;
      }

      return false;
    });

    if (test) {
      clearInterval(this.#observerStopsInterval as NodeJS.Timeout);
      this.#observerStopsInterval = null;

      this.#calculateBars();
    }
  };

  #calculateBars = (): void => {
    this.#stops.forEach((stop, i) => {
      if (i > 0) {
        const before = this.#stops[i - 1];
        const bfparent = before.parentElement?.parentElement;
        const bfparentbounds = bfparent?.getBoundingClientRect();
        const bfbounds = before.getBoundingClientRect();
        const crbounds = stop.getBoundingClientRect();

        const bar = this.#bars[i - 1];
        bar.style.width = `${crbounds.x - bfbounds.x}px`;
        bar.style.left = `${bfbounds.x - (bfparentbounds as DOMRect).x + crbounds.width / 2}px`;
        bar.style.top = `${crbounds.height / 2}px`;
      }
    });

    this.#calculateHeight();
  };

  #calculateHeight = (): void => {
    const labels = Array.from(this.#container.getElementsByClassName('station-stop-label'));

    type Bounds = {
      y: number;
      height: number;
    };

    const major: {
      h: number;
      bounds: null | Bounds;
    } = { h: 0, bounds: null };

    labels.forEach((label) => {
      const { y, height } = label.getBoundingClientRect();
      if (height > major.h) {
        major.h = height;
        major.bounds = { y, height };
      }
    });

    const containerBounds = this.#container.getBoundingClientRect();
    this.#container.style.height = `${
      (major.bounds as Bounds).y + (major.bounds as Bounds).height - containerBounds.y
    }px`;
  };

  destroy = (): void => {
    this.#observer.disconnect();
    this.#resizeObserver.disconnect();
    if (this.#observerStopsInterval) {
      clearInterval(this.#observerStopsInterval);
      this.#observerStopsInterval = null;
    }

    this.#container.innerHTML = '';
  };
}

export { Station };
