"use client"
import Link from "next/link";
import styles from "./styles.module.scss" ;
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuProps } from "@/utils/menu.type";

interface SubMenuProps {
  menu: MenuProps;
}

export function SubMenu({ menu }: SubMenuProps ){
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {

      if(window.innerWidth > 768) {
        setIsOpen(false)
      }
      
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []);

  function togglerMenu() {
    setIsOpen(!isOpen)
  }


  return (
    <section className={styles.submenu}>
      <div className={styles.contentMenu} onClick={togglerMenu}>
        <Menu width={34} color="#000"/>
        Menu
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>

        {isOpen && (
          <button onClick={togglerMenu} style={{ background: "transparent" }}>
            <X width={54} color="#121212" />
          </button>
        )}
        
        {menu.object.map((item) => (
          <li key={`/post/${item.slug}`}>
            <Link href={`/post/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}