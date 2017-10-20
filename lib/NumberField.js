'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberField = function NumberField(field) {
  var handleChange = function handleChange(event) {
    field.input.onChange(event);

    if (field.onChange) {
      field.onChange(event);
    }

    if (field.onNumberChange) {
      field.onNumberChange(event);
    }
  };

  var labelSize = field.labelSize || 'col-sm-3';
  var inputSize = field.inputSize || 'col-sm-9';

  return _react2.default.createElement(
    'div',
    {
      className: 'form-group' + (field.meta.touched && field.meta.error ? ' has-error' : '')
    },
    _react2.default.createElement(
      'label',
      { className: labelSize + ' control-label' },
      field.label,
      field.required ? ' *' : null
    ),
    _react2.default.createElement(
      'div',
      { className: inputSize },
      _react2.default.createElement('input', _extends({
        className: 'form-control',
        id: field.id,
        type: field.type
      }, field.input, {
        max: field.max,
        min: field.min,
        onChange: handleChange,
        placeholder: field.label,
        step: field.step
      })),
      field.helpBlock && _react2.default.createElement(
        'span',
        { className: 'help-block' },
        field.helpBlock
      ),
      field.meta.touched && field.meta.error && _react2.default.createElement(
        'span',
        { className: 'help-block' },
        field.meta.error
      )
    )
  );
};

exports.default = NumberField;