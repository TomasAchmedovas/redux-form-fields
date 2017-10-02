// @flow
import React from 'react'
import Select from 'react-select'

const ReactSelectField = (field: Object) => {
  const onChange = event => {
    const value = (event && event.value) || ''

    if (field.onValueChange) {
      field.onValueChange(value)
    }

    if (field.input.onChange) {
      field.input.onChange(value)
    }

    if (field.onChange) {
      field.onChange(value)
    }
  }

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      <label className="col-sm-3 control-label">{field.label}</label>
      <div className="col-sm-9">
        <Select
          {...field}
          onBlur={() => field.input.onBlur(field.input.value)}
          onChange={onChange}
          options={field.options}
          value={field.input.value || ''}
        />

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

export default ReactSelectField
