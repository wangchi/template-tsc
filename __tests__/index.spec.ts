import { stringIncludes } from '../src/index';

test('stringIncludes', () => {
  expect(stringIncludes('abcd123', 'cd')).toBe(true);

  expect(stringIncludes('abcd123', 'cd', 1)).toBe(true);

  expect(stringIncludes('abcd123', 'cd', 2)).toBe(true);

  expect(stringIncludes('abcd123', 'cd', 3)).toBe(false);

  expect(
    stringIncludes('abcd123', () => {
      console.log('foo');
    })
  ).toBe(false);

  let thrownError: any;

  try {
    stringIncludes('abcd123', /cd/);
  } catch (error) {
    thrownError = error;
  }

  expect(thrownError).toEqual(
    TypeError('second argument must not be a RegExp')
  );
});
