"use client"

import Link from "next/link";
import styles from "./error.module.scss";


export default function Error(){
  return (
    <div className={styles.error}>
      <h2>Not Afound</h2>
      <Link href="/">
        Voltar para home
      </Link>
    </div>
  )
}