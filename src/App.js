import React from 'react'
import 'antd/dist/antd.css'
import Layout from 'antd/lib/layout'
import Title from 'antd/lib/typography/Title'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

import { Info, Settings, Users } from 'components'

import styles from './App.module.scss'

function App() {
  return (
    <Layout className={styles.wrap}>
      <Title className={styles.title}>Check total</Title>

      <Row className={styles.info}>
        <Col>
          <Settings />
        </Col>
        <Col>
          <Info />
        </Col>
        <Col />
      </Row>

      <Users />
    </Layout>
  )
}

export default App
