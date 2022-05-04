import { keys } from '../keys/keys';

interface CreateErrorInput {
  /** Package name, that has thrown an error, e.g. @pattern/headless */
  scope?: string;

  /** Message displayed in the console */
  message: string;

  /** Error code, used to construct link to error decoder on pattern-ui.design website */
  code: string;
}

export function createError({ message, code, scope = '@pattern/core' }: CreateErrorInput) {
  return `[${scope}] ${
    message.endsWith('.') ? message : `${message}.`
  } Learn more – https://pattern-ui.design/errors/${code}/`;
}

export function createErrors<ErrorKey extends string>(
  errorsMap: Record<ErrorKey, string>,
  scope = '@pattern/core'
): Record<ErrorKey, string> {
  return keys(errorsMap).reduce((acc, errorKey) => {
    acc[errorKey] = createError({ code: errorKey, message: errorsMap[errorKey], scope });
    return acc;
  }, {} as Record<ErrorKey, string>);
}
