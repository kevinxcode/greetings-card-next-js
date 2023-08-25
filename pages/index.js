import React, { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import arr from './data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(0);
  const count_arr = arr.length
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      // This code will run only on the initial render
      fetcharr();
      hasMounted.current = true;
    }
  }, []);

  var list_arr = []; 
  const [fullname, setfullname] = useState('');
  const [noted_remark, setnoted_remark] = useState('');
  const fetcharr = () => {
    const interval = setInterval(() => {
      list_arr = shuffle(arr);
      setfullname(list_arr.fullname);
      setnoted_remark(list_arr.noted_remark);
    }, 5500);
     
  };

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array[0];
  }

  return (
    <>
      <Head>
        <title>GREETING'S CARD</title>
        <meta name="description" content="GREETINGS CARD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div className={styles.center}>
          <div className={styles.box} >
            <div className={styles.result_button}>
              <button className={styles.button} > @ {fullname}  </button>
            </div>
            <div className={styles.txt_box_small}>' {noted_remark} '</div>
          </div>
        </div>
      </main>
    </>
  )
}
