'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactSelectField = function ReactSelectField(field) {
  var onChange = function onChange(event) {
    var value = event && event.value || '';

    if (field.onValueChange) {
      field.onValueChange(value);
    }

    if (field.input.onChange) {
      field.input.onChange(value);
    }

    if (field.onChange) {
      field.onChange(value);
    }
  };

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
      _react2.default.createElement(_reactSelect2.default, _extends({}, field, {
        onBlur: function onBlur() {
          return field.input.onBlur(field.input.value);
        },
        onChange: onChange,
        options: field.options,
        value: field.input.value || ''
      })),
      field.helpBlock && _react2.default.createElement(
        'span',
        { className: 'help-block' },
        field.helpBlock
      ),
      field.meta.touched && field.meta.error && _react2.default.createElement(
        'span',
        { className: 'help-block' },
        field.meta.error.constructor === Array ? field.meta.error[0] : field.meta.error
      )
    )
  );
};

exports.default = ReactSelectField;