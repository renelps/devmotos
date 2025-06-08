import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { Clock, Mail, Map, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer({ object }: HomeProps ) {
  return (
    <footer id="contatos" className={styles.footer}>
      <section className={styles.section}>
        <h2>Contatos</h2>
        <div className={styles.content}>  
            <div className={styles.item}>
              <Mail size={30} color="#fff"/>
              <div>
                <strong>Email</strong>
                <p>{object.metadata.contact.email}</p>
              </div>
            </div>


            <div className={styles.item}>
              <Phone size={30} color="#fff"/>
              <div>
                <strong>Telefone: </strong>
                <p>{object.metadata.contact.email}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Phone size={30} color="#fff"/>
              <div>
                <strong>Telefone: </strong>
                <p>{object.metadata.contact.phone}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Clock size={30} color="#fff"/>
              <div>
                <strong>Horário de funcionamento</strong>
                <p>{object.metadata.contact.time}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Map size={30} color="#fff"/>
              <div>
                <strong>Localidade: </strong>
                <p>{object.metadata.contact.time}</p>
              </div>
            </div>
        </div>
      </section>
      <a href={object.metadata.cta_button.url}>
        <div className={styles.ContentWhatsapp}>
          <FaWhatsapp size={25} color="#fff"/>
          <p>{object.metadata.cta_button.title}</p>
        </div>
      </a>

      <p className={styles.copyText}>
        Todos direitos reservados para dev peças @{`${new Date().getFullYear()}`}
      </p>
    </footer>
  )
}