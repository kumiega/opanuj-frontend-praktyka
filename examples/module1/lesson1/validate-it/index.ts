import { Validator } from './validation';
import { MESSAGE_SUCCESS_VALID } from './validation/messages';
import { isEven, isNumber, isRange } from './validation/rules';

function main() {
  const input: HTMLInputElement = document.querySelector('#input')!;
  const validationButton: HTMLButtonElement =
    document.querySelector('#validation-btn')!;
  const clearInputButton: HTMLButtonElement =
    document.querySelector('#cleanup-btn')!;
  const result: HTMLDivElement = document.querySelector('#result')!;

  validationButton.addEventListener('click', () => {
    const validator = new Validator(isNumber, isEven, isRange(0, 100));
    const { success, message } = validator.validate(input.value);

    result.innerHTML = success ? MESSAGE_SUCCESS_VALID : message ?? 'Invalid';
  });

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
