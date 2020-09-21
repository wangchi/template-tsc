import { bar } from './foo/bar';

export function foo(): string {
  return bar();
}

export function stringIncludes(
  str: string,
  search: any,
  start?: number
): boolean {
  if (search instanceof RegExp) {
    throw TypeError('second argument must not be a RegExp');
  }

  if (start === undefined) start = 0;
  return str.indexOf(search, start) !== -1;
}
