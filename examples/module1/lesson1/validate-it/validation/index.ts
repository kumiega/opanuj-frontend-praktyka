export type ValidationResult = {
  success: boolean;
  message: string | null;
};

export type ValidationRule<T> = (input: T) => ValidationResult;

export class Validator {
  #rules;

  constructor(...rules: ValidationRule<any>[]) {
    this.#rules = rules;
  }

  validate(input: any) {
    for (const rule of this.#rules) {
      const result = rule(input);
      if (!result.success) {
        return result;
      }
    }

    return { success: true, message: null };
  }
}
