# Custom Checkbox directive
Angularjs custom checkbox directive

#Demo
----

[custom-checkbox demo](http://jsfiddle.net/gh/get/angularjs/1.4/OfirFridman/custom-checkbox/tree/master/demo)

## Requirements
----

- AngularJS

## Installation
----

### bower

1. execute this command to install the custom-checkbox as bower package

```
bower install angular-custom-checkbox --save
```

2. Add the custom-checkbox module as a dependency to your application module:

```js
 angular.module('your-app', ['custom-checkbox']);
 ```
  <script src="../bower_components/custom-checkbox/dist/scripts/main.js"></script>
  @import "../../bower_components/custom-checkbox/dist/styles/custom-checkbox.min.css";


##Example
----

```html

<input type="checkbox" id="cb_1" custom-checkbox data-label="Click" checked/>

```