import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import client from '../util/client'

const Home: NextPage = () => {


  useEffect(() => {
    client
      .get('/v2/competitions')
      .then((res: any) => {
        console.log('reponse data --->', res.data);
      })
      .catch((err: any) => {
        console.log('error -->', err);
      })

  }, [])

  return (
    <div className={styles.container}>
      <div className='d-flex justify-content-center'>
        <Button variant="info">Info</Button>
      </div>
    </div>
  )
}

export default Home
