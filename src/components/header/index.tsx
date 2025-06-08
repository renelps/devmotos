"use client"
import Link from "next/link"
import styles from "../header/style.module.scss"
import { useEffect, useState } from "react"

export function Header() {

  const [top, setTop] = useState(true)

  const scrollHandler = () => {
    if(window.scrollY > 10) {
      setTop(false)
    }else {
      setTop(true)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [top])


  return (
    <header className={`${styles.header} ${top ? styles.background : styles.fixed}`}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.contentLogo}>
            <Link href="/">
              Dev Motos
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">
              Home
            </Link>
            <Link href="/#servicos">
              Serviços
            </Link>
            <Link href="/#contatos">
              Contatos
            </Link> 
          </nav>

        </div>
      </div>
    </header>
  )
}