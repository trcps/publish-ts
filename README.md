```
    ┓ ┓• ┓   ┏┳┓┏┓
┏┓┓┏┣┓┃┓┏┣┓   ┃ ┗┓
┣┛┗┻┗┛┗┗┛┛┗   ┻ ┗┛
┛                 
```

A template for publhsing TypeScript packages to npm.

<br>

## Getting Started

Create your repository, clone it, then run the following:

```bash
# 👉  get the template and prepare the project
npx tmplr trcps/publish-ts
```
```bash
# 👉 install dependencies
npm i
```

<br>

## Coding

All code is located in `src/`, the entry point being `src/index.ts`. Types that are used for the project
are located in `src/types.ts`.

A sample code using the library is located in `sample/`. This is a web-based sample, using [vite](https://vitejs.dev) to
serve the sample. Run it like this:

```bash
# 👉 run the sample
npm run sample
```

### Code Style

Code style is enforced using [eslint](https://eslint.org), with [typescript-eslint](https://typescript-eslint.io) for TypeScript support. Check code style like this:

```bash
# 👉 check code style
npm run lint
```

You can further config eslint to your needs by editing `.eslintrc`. It is also recommended to [integrate eslint into your IDE](https://eslint.org/docs/latest/use/integrations#editors) for more convenience.

<br>

## Testing

Unit tests are located in `src/test`. Run them like this:

```bash
# 👉 run tests
npm test
```

Check the coverage:

```bash
# 👉 check coverage
npm run coverage
```

[Jest](https://jestjs.io) is used for testing, and [ts-jest](https://kulshekhar.github.io/ts-jest/) for TypeScript support. Jest picks up any file in a `test` folder, postfixed with `.test.tsx?`. 
[Jest](https://jestjs.io) is used for testing, and [ts-jest](https://kulshekhar.github.io/ts-jest/) for TypeScript support. Jest picks up any file in a `test` folder, postfixed with `.test.tsx?`. [jsdom]() is used as the test environment.

If you have code that should be tested in server environment, postfix your test file with `.ssr-test.tsx?` instead. This will run the test in a node environment, omitting browser globals.

You can further config Jest to your needs by editing `jest.config.js`.

<br>

## Publishing

### First Publish

The first publish needs to be manual:

```bash
npm publish
```

Afterwards, [generate access tokens on NPM](https://docs.npmjs.com/creating-and-viewing-access-tokens), and [add them to your GitHub repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets), as a secret named `NPM_AUTH_TOKEN`.


### Subsequent Publishes

Increase the version number in `package.json`, and then commit to `main` branch. This will trigger a GitHub action that will publish the package to NPM if the tests succeed, coverage passes thresholds and code style is consistent with specified rules.

<br>

