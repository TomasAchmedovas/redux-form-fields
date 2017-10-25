// @flow
import React from 'react'

const FileField = (field: Object) => {
  const labelSize = field.vertical ? '' : field.labelSize || 'col-sm-3'
  const inputSize = field.vertical ? '' : field.inputSize || 'col-sm-9'

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      <label className={`${labelSize} control-label`}>{field.label}</label>

      <div className={inputSize}>
        <input
          id={field.id}
          {...field.input}
          style={{ height: 34, paddingTop: 8 }}
          type="file"
        />

        {field.meta.touched &&
          field.meta.error && (
            <span className="help-block">{field.meta.error}</span>
          )}
      </div>
    </div>
  )
}

export default FileField
