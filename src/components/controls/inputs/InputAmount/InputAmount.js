import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Input from 'antd/lib/input'

import noop from 'lodash/noop'

export const InputAmount = ({ value, onChange }) => {
  const handleChange = useCallback(
    e => {
      const { value: val } = e.target
      if (!isNaN(val) || val === '' || val === '-') {
        onChange(+val)
      }
    },
    [onChange],
  )

  return <Input maxLength={3} value={value} onChange={handleChange} />
}

InputAmount.defaultProps = {
  value: null,
  onChange: noop,
}

InputAmount.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}
