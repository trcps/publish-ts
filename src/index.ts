export * from './types'


import { Message } from './types'


export function {{ tmplr.package_name | camelCase }}(): Message {
  return {
    msg: 'Hellow, this is {{ tmplr.package_name }}!'
  }
}
