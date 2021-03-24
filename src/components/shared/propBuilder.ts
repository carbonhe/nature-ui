import { PropType } from 'vue';

type PropValueFactory<T> = (props: Record<string, unknown>) => T;

type PropValidator<T> = (value: T) => boolean;

interface PropOptions<T> {
  type?: PropType<T>;
  required?: boolean;
  default?: T | PropValueFactory<T>;
  validator?: PropValidator<T>;
}

export class PropBuilder<T> {
  private readonly prop: PropOptions<T>;

  private readonly validators: PropValidator<T>[];

  static for<T>(type: PropType<T>): PropBuilder<T> {
    return new PropBuilder(type);
  }

  constructor(type: PropType<T>) {
    this.prop = { type };
    this.validators = [];
  }

  required(): PropBuilder<T> {
    this.prop.required = true;
    return this;
  }

  default(p: T | PropValueFactory<T>): PropBuilder<T> {
    this.prop.default = p;
    return this;
  }

  validate(validator: PropValidator<T>): PropBuilder<T> {
    this.validators.push(validator);
    return this;
  }

  in(values: T[]): PropBuilder<T> {
    this.validators.push(value => values.includes(value));
    return this;
  }

  build(): PropOptions<T> {
    if (this.validators.length) {
      this.prop.validator = value => {
        for (const validator of this.validators) {
          if (!validator(value)) {
            return false;
          }
        }
        return true;
      };
    }
    return this.prop;
  }
}
