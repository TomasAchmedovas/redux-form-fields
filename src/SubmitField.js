// @flow
import React from 'react'

const SubmitField = ({
  disabled,
  submitting,
  submitText,
  ...field
}: Object) => {
  const inputSize = field.vertical
    ? ''
    : field.inputSize || 'col-sm-9 col-sm-offset-3'

  return (
    <div className="form-group">
      <div className={inputSize}>
        <button
          className={`btn btn-primary${field.block ? ' btn-block' : ''}`}
          disabled={disabled}
          name="submit"
          type="submit"
        >
          {submitting ? 'Please wait...' : submitText || 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default SubmitField
