import type { ValidationRule } from '.';
import {
  MESSAGE_ERROR_INVALID_EVEN,
  MESSAGE_ERROR_INVALID_INT,
  MESSAGE_ERROR_INVALID_RANGE,
} from './messages';

export const isNumber: ValidationRule<any> = (value) => {
  const success = value != '' && Number.isInteger(Number(value));

  if (!success) {
    return {
      success: false,
      message: MESSAGE_ERROR_INVALID_INT,
    };
  }

  return {
    success,
    message: null,
  };
};

export const isEven: ValidationRule<any> = (value) => {
  const success = parseFloat(value) % 2 === 0;

  if (!success) {
    return {
      success: false,
      message: MESSAGE_ERROR_INVALID_EVEN,
    };
  }

  return {
    success,
    message: null,
  };
};

export const isRange =
  (min: number, max: number): ValidationRule<any> =>
  (value) => {
    value = parseFloat(value);
    const success = value >= min && value <= max;

    if (!success) {
      return {
        success: false,
        message: MESSAGE_ERROR_INVALID_RANGE,
      };
    }

    return {
      success,
      message: null,
    };
  };
