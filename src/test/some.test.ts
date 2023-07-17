import { someFunction } from '..'


describe(someFunction, () => {
  test('does stuff.', () => {
    expect(someFunction()).toBe('Hellow, this is {{ tmplr.package_name }}!')
  })
})
