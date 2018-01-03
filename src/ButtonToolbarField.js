// @flow
import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

const ButtonToolbarField = (field: Object) => {
  const handleChange = value => {
    field.input.onChange(value)

    if (field.onChange) {
      field.onChange(value)
    }
  }

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{field.label}</label>

      <div className="col-sm-9">
        <ButtonToolbar>
          {field.options.map(option => {
            return (
              <Button
                active={option.value == field.input.value}
                bsStyle="default"
                key={option.value}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </Button>
            )
          })}
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default ButtonToolbarField
