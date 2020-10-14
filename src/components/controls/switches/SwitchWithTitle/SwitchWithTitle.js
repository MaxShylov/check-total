import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Switch from 'antd/lib/switch'

import { getWithTitle } from 'services/store/settings/selectors'
import { settingsActions } from 'services/store/settings/actions'

export const SwitchWithTitle = () => {
  const dispatch = useDispatch()
  const checked = useSelector(getWithTitle)

  const handleChange = useCallback(
    value => dispatch(settingsActions.setWithTitle(value)),
    [dispatch],
  )

  return <Switch checked={checked} onChange={handleChange} />
}
