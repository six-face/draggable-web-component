## A simplist and flexible draggable exchangeable web component

### Can be easy to integerate into React.js / Vue.js / Angualar /Vanilla js

### Demo
![](./graggable-demo.gif)

### Install
```
npm install draggable-web-component 
```

#### Usage:
First of all, you have to give every `<draggable-element>` an   `id`  just like we iterate list in React/Vue in order to identify the element itself, then we can go:

In React/Vue/Angular (import it in whatever component file that you want to use with)
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
In Plain js + HTML page (just use it as a normal Javascript file as you do in general), since you need web server to serve the `import` syntax in a html file, e.g: 

```js
<script type="module">
import 'draggable-web-component'
</script>
````
so if you just wanna try it, simply import it from node_modules directory manually : ) e.g:
```html
<body>
  <draggable-element id="1">
    <p>I am drag element 1</p>
  </draggable-element>
  <script src="./node_modules/draggable-web-component/index.js"></script>
</body>
```

