# MaterialJS

This is a library that allows you to theme your components with material design when using a CSS in JS solution like [Aphrodite](https://github.com/Khan/aphrodite).

It's roughly based on []Material Design Lite](https://getmdl.io/)

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
<button className={css(styles.raised)}>Button</button>
);

const styles = StyleSheet.create({
  button: { ...button.flat },
  raised: { ...button.raised }
});

export default App;
```
