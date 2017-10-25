// @flow
import React from 'react'

const InputField = (field: Object) => {
  const handleChange = event => {
    if (field.onValueChange) {
      field.onValueChange(event)
    }

    if (field.input.onChange) {
      field.input.onChange(event)
    }

    if (field.onChange) {
      field.onChange(event)
    }
  }

  const labelSize = field.vertical ? '' : field.labelSize || 'col-sm-3'
  const inputSize = field.vertical ? '' : field.inputSize || 'col-sm-9'

  let inputTag = (
    <input
      className="form-control"
      id={field.id}
      {...field.input}
      disabled={field.disabled}
      onChange={handleChange}
      placeholder={field.placeholder || field.label}
      type={field.type}
    />
  )

  if (field.leftAddon || field.rightAddon) {
    inputTag = (
      <div className="input-group">
        {field.leftAddon}
        {inputTag}
        {field.rightAddon}
      </div>
    )
  }

  return (
    <div
      className={`form-group${field.meta.touched && field.meta.error
        ? ' has-error'
        : ''}`}
    >
      <label className={`${labelSize} control-label`}>
        {field.label}
        {field.required ? ' *' : null}
      </label>
      <div className={inputSize}>
        {inputTag}

        {field.helpBlock && (
          <span className="help-block">{field.helpBlock}</span>
        )}
        {field.meta.touched &&
          field.meta.error && (
            <span className="help-block">{field.meta.error}</span>
          )}
      </div>
    </div>
  )
}

export default InputField
