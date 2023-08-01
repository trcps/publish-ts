import { {{ tmplr.package_name | camelCase }}, Message } from '../index'


test('everything is exported.', () => {
  expect({{ tmplr.package_name | camelCase }}).toBeDefined()
  expect(<Message>{}).toBeDefined()
})
