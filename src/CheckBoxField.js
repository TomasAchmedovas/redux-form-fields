// @flow
import React from 'react'

const INPUT_LIKE = 'inputLike'

const CheckBoxField = (field: Object) => {
  const handleChange = event => {
    field.input.onChange(event)

    if (field.onChange) {
      field.onChange(event)
    }

    if (field.onCheckBoxChange) {
      field.onCheckBoxChange(event)
    }
  }

  let inputTag = (
    <input
      id={field.id}
      {...field.input}
      onChange={handleChange}
      type={field.type}
    />
  )

  const labelSize = field.vertical ? '' : field.labelSize || 'col-sm-3'
  const inputSize = field.vertical
    ? ''
    : field.inputSize || field.checkboxStyle == INPUT_LIKE
      ? 'col-sm-9'
      : 'col-sm-9 col-sm-offset-3'

  return (
    <div
      className={
        'form-group' +
        (field.meta.touched && field.meta.error ? ' has-error' : '')
      }
    >
      {field.checkboxStyle == INPUT_LIKE ? (
        <label className={labelSize}>
          {field.label}
          {field.required ? ' *' : null}
        </label>
      ) : null}

      <div className={inputSize}>
        {field.checkboxStyle == INPUT_LIKE ? (
          inputTag
        ) : (
          <div className="checkbox">
            <label>
              {inputTag} {field.label}
            </label>
          </div>
        )}

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

export default CheckBoxField
