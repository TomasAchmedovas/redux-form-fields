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
