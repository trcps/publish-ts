import { {{ tmplr.package_name | camelCase }} } from '../src'

document.querySelector('main')!.innerHTML = `<h1>${{{ tmplr.package_name | camelCase }}().msg}</h1>`
