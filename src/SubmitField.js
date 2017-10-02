// @flow
import React from 'react'

const SubmitField = ({
  disabled,
  submitting,
  submitText,
  ...field
}: Object) => (
  <div className="form-group">
    <div className={field.block ? 'col-sm-12' : 'col-sm-9 col-sm-offset-3'}>
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

export default SubmitField
