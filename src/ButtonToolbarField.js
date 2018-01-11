// @flow
import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

const ButtonToolbarField = (field: Object) => {
  const handleChange = value => {
    if (field.onSelect) {
      field.onSelect(value)
    }

    if (field.onChange) {
      field.onChange(value)
    }

    if (field.input.onChange) {
      field.input.onChange(value)
    }
  } 

  return (
    <div className="form-group">
      <label className="control-label col-sm-3">{field.label}</label>

      <div className="col-sm-9">
        <ButtonToolbar>
          {field.options &&
            field.options.length > 0 &&
            field.options.map(option => {
              return (
                <Button
                  active={option.value == field.input.value}
                  block={field.block}
                  bsSize={field.bsSize}
                  bsStyle={field.bsStyle}
                  disabled={field.disabled}
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
