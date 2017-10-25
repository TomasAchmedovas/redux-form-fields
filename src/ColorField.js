// @flow
import React from 'react'
import { SketchPicker } from 'react-color'

const ColorField = (field: Object) => {
  const handleChange = (color, event) => {
    field.input.onChange(color.hex)

    if (field.onChange) {
      field.onChange(color.hex)
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
      <label className={labelSize + ' control-label'}>{field.label}</label>
      <div className={inputSize}>
        <SketchPicker color={field.input.value} onChange={handleChange} />

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

export default ColorField
