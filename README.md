# MaterialJS

This is a library that allows you to theme your components with material design when using a CSS in JS solution like [Aphrodite](https://github.com/Khan/aphrodite).

It's roughly based on [Material Design Lite](https://getmdl.io/)

## Usage

```JSX
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { button } from 'materialjs';

const App = () => (
<h1>
  Hello, world!
</h1>
    <button className={css(styles.button)}>Button</button>
    <button className={css(styles.buttonColored)}>Button</button>
    <button className={css(styles.buttonAccent)}>Button</button>
    <button className={css(styles.raised)}>Button</button>
    <button className={css(styles.raisedColored)}>Button</button>
    <button className={css(styles.raisedAccent)}>Button</button>
);

const styles = StyleSheet.create({
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

Plase follow the [karma commit style](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)
