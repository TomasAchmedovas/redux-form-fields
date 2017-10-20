"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base64FileField = function Base64FileField(field) {
  var handleChange = function handleChange(event) {
    if (event.target.files.length > 0) {
      var reader = new FileReader();
      var file = event.target.files[0];

      reader.onload = function (upload) {
        var base64 = upload.target.result;

        triggerOnChange(base64);
      };

      reader.readAsDataURL(file);
    }
  };

  var triggerOnChange = function triggerOnChange(value) {
    field.input.onChange(value);

    if (field.onChange) {
      field.onChange(value);
    }
  };

  var renderPreview = function renderPreview() {
    var previewSource = field.input.value;

    if (field.preview && previewSource) {
      return _react2.default.createElement(
        "div",
        { className: "clearfix" },
        _react2.default.createElement(
          "div",
          { className: "pull-left", style: { marginRight: '6px' } },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", { height: "120", src: previewSource }),
            _react2.default.createElement("br", null),
            _react2.default.createElement("br", null)
          )
        ),
        previewSource ? _react2.default.createElement(
          "div",
          { className: "pull-left" },
          _react2.default.createElement(
            "div",
            { className: "btn btn-danger btn-xs", onClick: handleFileDelete },
            _react2.default.createElement("i", { className: "fa fa-close" }),
            " Delete"
          )
        ) : null
      );
    } else {
      return null;
    }
  };

  var handleFileDelete = function handleFileDelete() {
    triggerOnChange('');
  };

  return _react2.default.createElement(
    "div",
    {
      className: 'form-group' + (field.meta.touched && field.meta.error ? ' has-error' : '')
    },
    _react2.default.createElement(
      "label",
      { className: "col-sm-3 control-label" },
      field.label
    ),
    _react2.default.createElement(
      "div",
      { className: "col-sm-9" },
      renderPreview(),
      _react2.default.createElement("input", { disabled: field.disabled, onChange: handleChange, type: "file" }),
      _react2.default.createElement("input", _extends({}, field.input, { type: "hidden" })),
      field.helpBlock && _react2.default.createElement(
        "span",
        { className: "help-block" },
        field.helpBlock
      ),
      field.meta.touched && field.meta.error && _react2.default.createElement(
        "span",
        { className: "help-block" },
        field.meta.error
      )
    )
  );
};

exports.default = Base64FileField;