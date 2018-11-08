import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose';
import React, { Component } from 'react';
import Test from './Test.js';

var App =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(App, _Component);

  function App() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function render() {
    return React.createElement("div", null, React.createElement(Test, null));
  };

  return App;
}(Component);

export default App;
