## Create a new React component

Forked from https://github.com/joshwcomeau/new-component.
Added Storybook and basic testing.

### Usage

Install via NPM:

#### Globally for all projects

```bash
# Using Yarn:
$ yarn global add @metamn/new-component

# or, using NPM
$ npm i -g @metamn/new-component
```

#### Locally for a specific project

```bash
# Using Yarn:
$ yarn add @metamn/new-component

# or, using NPM
$ npm i @metamn/new-component
```

Then run:

```bash
$ cd PROJECT_DIRECTORY
$ new-component Button
```

### Packages included

### `clsx` for better class names

See https://www.npmjs.com/package/clsx for details.

### `i18next` for multi-language support

Will support the following languages / locales:

- Romanian (default): `ro-RO`
- Hungarian: `hu-HU`
- German: `de-DE`
- English: `en-US`

The locales / short codes were chosen from [this list](https://stackoverflow.com/questions/3191664/list-of-all-locales-and-their-short-codes).

See https://github.com/i18next/react-i18next for details.

#### Setup

You must have a `i18n.js` config file next to the `index.js` file in a CRA app.

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/**
 * Sets up translations
 *
 * - Every component manages it's own translations via namespaces
 * - Every component adds it's own translation items to `resources`
 *
 * @see https://github.com/i18next/react-i18next/issues/299
 * @see https://react.i18next.com/latest/usetranslation-hook#loading-namespaces
 *
 */
const resources = {};

/**
 * Sets up i18next
 *
 * @see https://react.i18next.com/latest/using-with-hooks
 */
i18n
  /**
   * Detects user language
   *
   * @see https://github.com/i18next/i18next-browser-languageDetector
   */
  .use(LanguageDetector)
  /**
   * Passes the i18n instance to react-i18next.
   */
  .use(initReactI18next)
  /**
   * Inits i18next
   *
   * @see https://www.i18next.com/overview/configuration-options
   */
  .init({
    resources,
    lng: "en-EN",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
```

In `index.js` you'll have to add this import statement:

```js
import "./i18n"; // See https://react.i18next.com/latest/using-with-hooks
```

### What you'll get

In `src/components/Button`:

```Javascript
// `Button/Button.js`
```

```Javascript
// `Button/Button.data.js`
```

```Javascript
// `Button/Button.native.js`
```

```Markdown
// `Button/Button.md`
```

```Javascript
// `Button/Button.test.js`
```

```Javascript
// `Button/index.js`
```

```Javascript
// `Button/Button.lang.en-us.js`
```

```Javascript
// `Button/Button.lang.de-de.js`
```

```Javascript
// `Button/Button.lang.ro-ro.js`
```

```Javascript
// `Button/Button.lang.hu-hu.js`
```

### Modify & test locally

You can easily fork this repo, modify, test, and publish on npm.

NOTE: Always start with changing the version number in `package.json` !!

#### Test locally

In this current repo:

```shell
npm pack
```

This will create a file like `new-component@0.0.1.tgz`.

In another folder:

```bash
npm i <path_to_new_component_repo>/metamn-new-component@0.0.1.tgz &&
./node_modules/.bin/new-component Button
```

#### Update the changelog

NOTE: Always update the changelog

#### Publish

First push changes to Github. Then:

```bash
npm publish
```

## Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [0.4.0] - 2020-05-25

#### Added

- `clsx`, for better class names
- Material UI, as the default Design System

#### Removed

- `styled-components`, replaced with Material UI
- Storybook, never used in the previous few projects

### [0.3.0] - 2020-01-14

#### Added

- `styled-components`, re-added, because when a new component is added it's first purpose is to mockup. Also every new component has a border and padding added to serve mockuping.
- `react-i18next` with `addResourceBundle` loading translations from language files co-located to the component

### [0.2.0] - 2019-11-6

#### Added

- Default tests

#### Changed

- Storybook stories to follow the Component Story Format: https://storybook.js.org/docs/formats/component-story-format/

#### Removed

- `styled-components`, because many times components use another library, like `material-ui`

### [0.1.2] - 2018-08-17

#### Fixed

- Exporting default props

### [0.1.1] - 2018-08-17

#### Changed

- How default props are exported

### [0.1.0] - 2018-07-03

#### Added

- New templates for function components

### [0.0.4] - 2018-12-11

#### Fixed

- Markdown is not run through `prettify()`.

### [0.0.3] - 2018-12-11

#### Added

- Markdown documentation support.

### [0.0.2] - 2018-12-11

#### Added

- A CHANGELOG section in README.

#### Changed

- The install instructions in README.

### 0.0.1 - 2018-12-11

#### Added

- Initial release
