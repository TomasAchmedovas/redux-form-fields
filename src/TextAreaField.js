// @flow
import React from 'react'

const TextAreaField = (field: Object) => {
  const labelSize = field.vertical ? '' : field.labelSize || 'col-sm-3'
  const inputSize = field.vertical ? '' : field.inputSize || 'col-sm-9'

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      {field.label ? (
        <label className={`${labelSize} control-label`}>
          {field.label}
          {field.required ? ' *' : null}
        </label>
      ) : null}
      <div className={inputSize}>
        <textarea
          className="form-control"
          id={field.id}
          required={field.required}
          {...field.input}
          placeholder={field.placeholder || field.label}
          rows={field.rows}
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

export default TextAreaField
