## A simplist and flexible draggable exchangeable web component

### Can be easy to integerate into React.js / Vue.js / Vanilla js

### Demo
![](./graggable-demo.gif)

### Install
```
npm install -D draggabble-web-component 
```

#### Usage:
In React/Vue (import it in whatever component file that you want to use with)
```js
import "draggable-web-component"
```
You can insert whatever content as the child nodes of it, super flexible : )
```html
<div class="group-1">
        <p>Group 1</p>
        <draggable-element id="1">
          <p>I am drag element 1</p></draggable-element
        >
        <draggable-element id="2">
          <p>I am drag element 2</p></draggable-element
        >
        <draggable-element id="3">
          <p>I am drag element 3</p></draggable-element
        >
        <draggable-element id="4">
          <p>I am drag element 4</p></draggable-element
        >
      </div>
```
In Plain js + HTML page (just use it as a normal Javascript file as you do in general):
```html
<body>
  <draggable-element id="1">
    <p>I am drag element 1</p>
  </draggable-element>
  <script src="./index.js"></script>
</body>
```

