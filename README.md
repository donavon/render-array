# render-array

A convenient way to return an array of JSX wihout the wrapping `div `element when using React 16.

## Install
```bash
$ npm i --save render-array
```

React 16 allows you to return an array, but you must use the following syntax:

```js
const App = () => [
  <div>A</div>,
  <div>B</div>
];
```

See the awkward comma after the first `div`? [I sent a tweet‏](https://twitter.com/donavon/status/891632825543348224) to Dan Abramov about this and he replied:

> _We were might explore something like \<\>\<div \/\>\<div \/\>\<\/\> in the future_

Not exactly an optimal solution either, IMO. In the mean time, I wrote `RenderArray` so your can code like this:

```js
const App = () => (
  <RenderArray>
    <div>A</div>
    <div>B</div>
  </RenderArray>
);
```
It looks the same as components you are used to in React 15, but it returns the children _without_ a wrapping `div` element.

See live example on [CodeSandbox](https://codesandbox.io/s/o2oQ9B3Q3).
