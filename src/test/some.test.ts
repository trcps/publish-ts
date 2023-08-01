import { type } from 'ts-inference-check'

import { {{ tmplr.package_name | camelCase }} } from '..'
import { Message } from '../types'


describe({{ tmplr.package_name | camelCase }}, () => {
  test('does stuff.', () => {
    expect({{ tmplr.package_name | camelCase }}().msg).toBe('Hellow, this is {{ tmplr.package_name }}!')
  })

  test('returns the proper type.', () => {
    expect(type({{ tmplr.package_name | camelCase }}()).is<Message>(true)).toBe(true)
  })
})
