// @flow
import React from 'react'

const NumberField = (field: Object) => {
  const handleChange = event => {
    field.input.onChange(event)

    if (field.onChange) {
      field.onChange(event)
    }

    if (field.onNumberChange) {
      field.onNumberChange(event)
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
        <input
          className="form-control"
          id={field.id}
          type={field.type}
          {...field.input}
          max={field.max}
          min={field.min}
          onChange={handleChange}
          placeholder={field.label}
          step={field.step}
        />

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

export default NumberField
