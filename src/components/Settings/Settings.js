import React from 'react'
import Title from 'antd/lib/typography/Title'

import { SwitchWithMy, SwitchWithTitle } from 'components/controls'

import styles from './Settings.module.scss'

export const Settings = () => {
  return (
    <div>
      <Title level={3}>Settings</Title>
      <div className={styles.item}>
        <div className={styles.label}>With My:</div>
        <SwitchWithMy />
      </div>
      <div className={styles.item}>
        <div className={styles.label}>With Title:</div>
        <SwitchWithTitle />
      </div>
    </div>
  )
}
