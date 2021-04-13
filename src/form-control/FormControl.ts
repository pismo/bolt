import { validate, isArray } from 'validate.js';
import { Input, IRef, IInput } from '../input/Input';

export interface FormControlProps {
  form: HTMLFormElement;
  initialValues: { [prop: string]: any };
  validationSchema?: { [prop: string]: any };
  autoController?: boolean;
  events?: { [name: string]: Omit<IInput, 'destroy' | 'focus' | 'blur'> };
}

export interface IFormControlConstructor {
  new (props: FormControlProps): IFormControl;
}

export interface IFormControl {
  readonly values: { [name: string]: any };
  readonly errors: { [name: string]: string };
  readonly cleanFields: () => void;
  readonly fieldsToInitials: () => void;
  readonly destroy: () => void;

  onValidation?: (values) => { [k: string]: any };
  onChange?: (target: { name: string; value: string }, values: { [prop: string]: any }) => void;
  onError?: (errors: { [k: string]: string }) => void;
  onSubmit?: (values: { [k: string]: any }) => void;
}

class FormControl implements IFormControl {
  #form: HTMLFormElement;

  #submit: HTMLButtonElement;

  #inputMap: { [name: string]: { instance: IInput; element: IRef } } = {};

  #initialValues: { [prop: string]: any };

  #values: { [prop: string]: any } = {};

  #errors: { [prop: string]: string } = {};

  #validaTionSchema?: { [prop: string]: any };

  #autoController? = false;

  onValidation?: (values) => { [k: string]: any };

  onChange?: (target: { name: string; value: string }, values: { [prop: string]: any }) => void;

  onError?: (errors: { [k: string]: string }) => void;

  onSubmit?: (values: { [k: string]: any }) => void;

  constructor({ form, initialValues, validationSchema, autoController, events }: FormControlProps) {
    this.#form = form;

    this.#initialValues = initialValues;
    this.#validaTionSchema = validationSchema;
    this.#autoController = autoController;

    this.#submit = this.#form.querySelector('button[type=submit]') as HTMLButtonElement;
    this.#submit.addEventListener('click', this.#submitHandle);

    const inputs = this.#form.getElementsByTagName('bolt-input');
    Array.from(inputs).forEach((el) => {
      const $el = el as IRef;
      const name = $el.dataset.name || '';

      $el.dataset.value = initialValues[name] as string;
      /* eslint-disable @typescript-eslint/no-unsafe-assignment */
      this.#values[name] = initialValues[name];

      const input = new Input($el);
      input.onChange = this.#handleChange;

      if (events && events[name]) {
        Object.keys(events[name]).forEach((k) => {
          /* eslint-disable @typescript-eslint/no-unsafe-assignment */
          input[k] = events[name][k];
        });
      }

      this.#inputMap[name] = { instance: input, element: $el };
    });
  }

  get values(): { [prop: string]: any } {
    return this.#values;
  }

  get errors(): { [prop: string]: string } {
    return this.#errors;
  }

  #handleChange = (e: InputEvent): void => {
    const target = e.target as HTMLInputElement;
    this.#values = { ...this.#values, [target.name]: target.value };

    if (this.#errors[target.name]) {
      const err = { ...this.#errors };
      delete err[target.name];

      this.#errors = err;

      if (this.#autoController) {
        const el = this.#inputMap[target.name].element;
        el.dataset.error = 'false';
        el.dataset.helpertext = '';
      }
    }

    if (this.onChange) this.onChange({ name: target.name, value: target.value }, this.#values);
  };

  #submitHandle = (e: MouseEvent): void => {
    e.preventDefault();

    const schema = this.onValidation ? this.onValidation(this.#values) : this.#validaTionSchema;

    if (!schema) return;

    const val = validate(this.#values, schema, { format: 'detailed' });

    Object.keys(this.#errors).forEach((k) => {
      this.#inputMap[k].element.dataset.error = 'false';
      this.#inputMap[k].element.dataset.helpertext = '';
    });

    if (isArray(val)) {
      const err = {};

      (val as [{ attribute: string; options: { [k: string]: any }; error: any }]).forEach(
        ({ attribute, options, error }, index) => {
          const desc = options.message ?? error;
          err[attribute] = desc;

          if (this.#autoController) {
            const el = this.#inputMap[attribute].element;
            const inp = this.#inputMap[attribute].instance;

            if (index === 0) inp.focus();

            el.dataset.error = 'true';
            el.dataset.helpertext = desc;
          }
        }
      );

      this.#errors = err;

      if (this.onError) this.onError(err);

      return;
    }

    if (this.onSubmit) this.onSubmit(this.#values);
  };

  readonly cleanFields = (): void => {
    Object.values(this.#inputMap).forEach(({ element }) => {
      const el = element;
      el.dataset.value = '';
    });
  };

  readonly fieldsToInitials = (): void => {
    Object.entries(this.#inputMap).forEach(([key, { element }]) => {
      const el = element;
      el.dataset.value = this.#initialValues[key];
    });
  };

  readonly destroy = (): void => {
    this.#submit.removeEventListener('click', this.#submitHandle);
    Object.values(this.#inputMap).forEach(({ instance }) => instance.destroy());
  };
}

export { FormControl };
