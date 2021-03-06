// @flow
import React from 'react'

const SelectField = (field: Object) => {
  const handleChange = event => {
    field.input.onChange(event)

    if (field.onChange) {
      field.onChange(event)
    }
  }

  const labelSize = field.vertical ? '' : field.labelSize || 'col-sm-3'
  const inputSize = field.vertical ? '' : field.inputSize || 'col-sm-9'

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      <label className={`${labelSize} control-label`}>
        {field.label}
        {field.required ? ' *' : null}
      </label>

      <div className={inputSize}>
        <select
          {...field.input}
          className="form-control"
          disabled={field.disabled}
          id={field.id}
          onChange={handleChange}
        >
          {field.options
            ? field.options.map(({ label, ...option }, index) => (
                <option key={index} {...option}>
                  {label}
                </option>
              ))
            : field.children}
        </select>

        {field.helpBlock && (
          <span className="help-block">{field.helpBlock}</span>
        )}
        {field.meta.touched &&
          field.meta.error && (
            <span className="help-block">
              {field.meta.error.constructor === Array
                ? field.meta.error[0]
                : field.meta.error}
            </span>
          )}
      </div>
    </div>
  )
}

export default SelectField
