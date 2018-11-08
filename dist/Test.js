import _inheritsLoose from '@babel/runtime/helpers/inheritsLoose';
import React, { Component } from 'react';
import '../public/Test.css';

var Test =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Test, _Component);

  function Test() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Test.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "test"
    }, "Test");
  };

  return Test;
}(Component);

export default Test;
