// @flow
import React from 'react'

const FileField = (field: Object) => (
  <div
    className={
      'form-group' +
      (field.meta.touched && field.meta.error ? ' has-error' : '')
    }
  >
    <label className="col-sm-3 control-label">{field.label}</label>
    <div className="col-sm-9">
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

export default FileField
