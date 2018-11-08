'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _inheritsLoose = _interopDefault(require('@babel/runtime/helpers/inheritsLoose'));
var React = _interopDefault(require('react'));

var Table =
/*#__PURE__*/
function (_React$component) {
  _inheritsLoose(Table, _React$component);

  function Table() {
    return _React$component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    return React.createElement("div", null, "table");
  };

  return Table;
}(React.component);

module.exports = Table;
