// @flow
import React from 'react'

const SelectField = (field: Object) => {
  const handleChange = event => {
    field.input.onChange(event)

    if (field.onChange) {
      field.onChange(event)
    }
  }

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      <label className="col-sm-3 control-label">
        {field.label}
        {field.required ? ' *' : null}
      </label>

      <div className="col-sm-9">
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
