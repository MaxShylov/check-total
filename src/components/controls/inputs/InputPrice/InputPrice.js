import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Input from 'antd/lib/input'

import noop from 'lodash/noop'

export const InputPrice = ({ value, onChange }) => {
  const handleChange = useCallback(
    e => {
      const { value: val } = e.target
      if (!isNaN(+val) || val === '' || val === '-') {
        onChange(+val)
      }
    },
    [onChange],
  )

  return (
    <Input maxLength={10} prefix="₴" value={value} onChange={handleChange} />
  )
}

InputPrice.defaultProps = {
  value: null,
  onChange: noop,
}

InputPrice.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}
