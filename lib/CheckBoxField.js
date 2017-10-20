'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INPUT_LIKE = 'inputLike';

var CheckBoxField = function CheckBoxField(field) {
  var handleChange = function handleChange(event) {
    field.input.onChange(event);

    if (field.onChange) {
      field.onChange(event);
    }

    if (field.onCheckBoxChange) {
      field.onCheckBoxChange(event);
    }
  };

  var inputTag = _react2.default.createElement('input', _extends({
    id: field.id
  }, field.input, {
    onChange: handleChange,
    type: field.type
  }));

  return _react2.default.createElement(
    'div',
    {
      className: 'form-group' + (field.meta.touched && field.meta.error ? ' has-error' : '')
    },
    field.checkboxStyle == INPUT_LIKE ? _react2.default.createElement(
      'label',
      { className: field.labelSize || 'col-sm-3' },
      field.label
    ) : null,
    _react2.default.createElement(
      'div',
      {
        className: field.inputSize || field.checkboxStyle == INPUT_LIKE ? 'col-sm-9' : 'col-sm-9 col-sm-offset-3'
      },
      field.checkboxStyle == INPUT_LIKE ? inputTag : _react2.default.createElement(
        'div',
        { className: 'checkbox' },
        _react2.default.createElement(
          'label',
          null,
          inputTag,
          ' ',
          field.label
        )
      ),
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

exports.default = CheckBoxField;