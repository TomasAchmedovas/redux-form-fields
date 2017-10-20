'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaField = function TextAreaField(field) {
  var labelSize = field.labelSize || 'col-sm-3';
  var inputSize = field.inputSize || 'col-sm-9';

  return _react2.default.createElement(
    'div',
    {
      className: 'form-group' + (field.meta.touched && field.meta.error ? ' has-error' : '')
    },
    field.label ? _react2.default.createElement(
      'label',
      { className: labelSize + ' control-label' },
      field.label,
      field.required ? ' *' : null
    ) : null,
    _react2.default.createElement(
      'div',
      { className: inputSize },
      _react2.default.createElement('textarea', _extends({
        className: 'form-control',
        id: field.id,
        required: field.required
      }, field.input, {
        placeholder: field.placeholder || field.label,
        rows: field.rows
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

exports.default = TextAreaField;