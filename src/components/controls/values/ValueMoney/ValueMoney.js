import React from 'react'
import PropTypes from 'prop-types'

export const ValueMoney = ({ value }) => {
  if (!isFinite(value)) return '—'
  return <strong>₴ {value || 0}</strong>
}

ValueMoney.defaultProps = {
  value: null,
}

ValueMoney.propTypes = {
  value: PropTypes.number,
}
