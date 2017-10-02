// @flow
import React from 'react'

const Base64FileField = (field: Object) => {
  const handleChange = event => {
    if (event.target.files.length > 0) {
      let reader = new FileReader()
      const file = event.target.files[0]

      reader.onload = upload => {
        const base64 = upload.target.result

        triggerOnChange(base64)
      }

      reader.readAsDataURL(file)
    }
  }

  const triggerOnChange = value => {
    field.input.onChange(value)

    if (field.onChange) {
      field.onChange(value)
    }
  }

  const renderPreview = () => {
    const previewSource = field.input.value

    if (field.preview && previewSource) {
      return (
        <div className="clearfix">
          <div className="pull-left" style={{ marginRight: '6px' }}>
            <div>
              <img height="120" src={previewSource} />

              <br />
              <br />
            </div>
          </div>
          {previewSource ? (
            <div className="pull-left">
              <div className="btn btn-danger btn-xs" onClick={handleFileDelete}>
                <i className="fa fa-close" /> Delete
              </div>
            </div>
          ) : null}
        </div>
      )
    } else {
      return null
    }
  }

  const handleFileDelete = () => {
    triggerOnChange('')
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
        {renderPreview()}

        <input disabled={field.disabled} onChange={handleChange} type="file" />

        <input {...field.input} type="hidden" />

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

export default Base64FileField
