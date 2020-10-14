import React from 'react'
import 'antd/dist/antd.css'
import Layout from 'antd/lib/layout'
import Title from 'antd/lib/typography/Title'

import { Info, Users } from 'components'

import styles from './App.module.scss'

function App() {
  return (
    <Layout className={styles.wrap}>
      <Title className={styles.title}>Check total</Title>

      <div className={styles.info}>
        <Info />
      </div>

      <Users />
    </Layout>
  )
}

export default App
