'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileField = function FileField(field) {
  return _react2.default.createElement(
    'div',
    {
      className: 'form-group' + (field.meta.touched && field.meta.error ? ' has-error' : '')
    },
    _react2.default.createElement(
      'label',
      { className: 'col-sm-3 control-label' },
      field.label
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-sm-9' },
      _react2.default.createElement('input', _extends({
        id: field.id
      }, field.input, {
        style: { height: 34, paddingTop: 8 },
        type: 'file'
      })),
      field.meta.touched && field.meta.error && _react2.default.createElement(
        'span',
        { className: 'help-block' },
        field.meta.error
      )
    )
  );
};

exports.default = FileField;