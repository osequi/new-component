## Create a new React component

Forked from https://github.com/joshwcomeau/new-component

### Usage

Install via NPM:
```bash
# Using Yarn:
$ yarn global add new-component

# or, using NPM
$ npm i -g new-component
```

Run:
```bash
$ cd PROJECT_DIRECTORY
$ new-component Button
```

### What you'll get

In `src/components/Button`:

```Javascript
// `Button/index.js`
export { default } from './Button';
```

```Javascript
// `Button/Button.js`
import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <div />;
  }
}

export default Button;
```
