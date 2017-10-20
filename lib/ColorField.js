'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorField = function ColorField(field) {
  var handleChange = function handleChange(color, event) {
    field.input.onChange(color.hex);

    if (field.onChange) {
      field.onChange(color.hex);
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
      field.label
    ),
    _react2.default.createElement(
      'div',
      { className: inputSize },
      _react2.default.createElement(_reactColor.SketchPicker, { color: field.input.value, onChange: handleChange }),
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

exports.default = ColorField;