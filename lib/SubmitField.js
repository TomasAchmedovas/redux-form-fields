'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SubmitField = function SubmitField(_ref) {
  var disabled = _ref.disabled,
      submitting = _ref.submitting,
      submitText = _ref.submitText,
      field = _objectWithoutProperties(_ref, ['disabled', 'submitting', 'submitText']);

  return _react2.default.createElement(
    'div',
    { className: 'form-group' },
    _react2.default.createElement(
      'div',
      { className: field.block ? 'col-sm-12' : 'col-sm-9 col-sm-offset-3' },
      _react2.default.createElement(
        'button',
        {
          className: 'btn btn-primary' + (field.block ? ' btn-block' : ''),
          disabled: disabled,
          name: 'submit',
          type: 'submit'
        },
        submitting ? 'Please wait...' : submitText || 'Submit'
      )
    )
  );
};

exports.default = SubmitField;