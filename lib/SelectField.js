'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SelectField = function SelectField(field) {
  var handleChange = function handleChange(event) {
    field.input.onChange(event);

    if (field.onChange) {
      field.onChange(event);
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
      field.label,
      field.required ? ' *' : null
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-sm-9' },
      _react2.default.createElement(
        'select',
        _extends({}, field.input, {
          className: 'form-control',
          disabled: field.disabled,
          id: field.id,
          onChange: handleChange
        }),
        field.options ? field.options.map(function (_ref, index) {
          var label = _ref.label,
              option = _objectWithoutProperties(_ref, ['label']);

          return _react2.default.createElement(
            'option',
            _extends({ key: index }, option),
            label
          );
        }) : field.children
      ),
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

exports.default = SelectField;