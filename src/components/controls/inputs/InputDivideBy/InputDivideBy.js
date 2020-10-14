import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Input from 'antd/lib/input'

import noop from 'lodash/noop'

export const InputDivideBy = ({ value, onChange }) => {
  const handleChange = useCallback(
    e => {
      const { value: val } = e.target
      if (!isNaN(val) || val === '' || val === '-') {
        onChange(+val)
      }
    },
    [onChange],
  )

  return (
    <Input maxLength={2} prefix="/" value={value} onChange={handleChange} />
  )
}

InputDivideBy.defaultProps = {
  value: null,
  onChange: noop,
}

InputDivideBy.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}
