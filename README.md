# render-array

React 16 allows you to return an array, but you must use the following syntax:

```js
const App = () => [
  <div>A</div>,
  <div>B</div>
];
```

See the awkward comma after the dirst `div`? I [tweeted Dan Abramov](https://twitter.com/donavon/status/891632825543348224) about this. He replied:

```text
We were might explore something like <><div /><div /></> in the future
```

In the mean time, I wrote `RenderArray` so you can code like this:

```js
const App = () => (
  <RenderArray>
    <div>A</div>
    <div>B</div>
  </RenderArray>
);
```

See live example on [CodeSandbox](https://codesandbox.io/s/o2oQ9B3Q3).
