import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Switch from 'antd/lib/switch'

import { getWithMy } from 'services/store/settings/selectors'
import { settingsActions } from 'services/store/settings/actions'

export const SwitchWithMy = () => {
  const dispatch = useDispatch()
  const checked = useSelector(getWithMy)

  const handleChange = useCallback(
    value => dispatch(settingsActions.setWithMy(value)),
    [dispatch],
  )

  return <Switch checked={checked} onChange={handleChange} />
}
