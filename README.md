# MaterialJS

This is a library that allows you to theme your components with material design when using a CSS in JS solution like [Aphrodite](https://github.com/Khan/aphrodite).

It's roughly based on [Material Design Lite](https://getmdl.io/)

## Usage

Make sure you include the Roboto font in your page.
```html
<link
  href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic'
  rel='stylesheet' type='text/css'
>
```

Base functions and styles are available in the base component, i.e. `import { base } from 'materialjs'`.

You may want to include a normalize css file first.

```JSX
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { base, button } from 'materialjs';

const App = () => (
  <div className={css(styles.html)}>
    <h1 className={css(styles.h1)}>
      Hello, world!
    </h1>
    <button className={css(styles.button)}>Button</button>
    <button className={css(styles.buttonColored)}>Button</button>
    <button className={css(styles.buttonAccent)}>Button</button>
    <button className={css(styles.raised)}>Button</button>
    <button className={css(styles.raisedColored)}>Button</button>
    <button className={css(styles.raisedAccent)}>Button</button>
  </div>
);

const styles = StyleSheet.create({
  html: { ...base.html },
  h1: { ...base.heading(1) },
  button: { ...button.flat },
  buttonColored: { ...button.flatColored },
  buttonAccent: { ...button.flatAccent },
  raised: { ...button.raised },
  raisedColored: { ...button.raisedColored },
  raisedAccent: { ...button.raisedAccent },
});

export default App;
```

![Material Buttons](http://i.imgur.com/YBNknKH.png)

## Contributing

Tasks towards feature completion can be found on the [MVP project board](https://github.com/justafish/materialjs/projects).

This project follows the [Contributor Covenant Code of Conduct](http://contributor-covenant.org/version/1/4/)

Please follow the [karma commit style](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)
