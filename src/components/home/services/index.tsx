import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export function Services({ object }: HomeProps ) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h2 className={styles.title}>Sobre</h2>
          <p className={styles.description}>{object.metadata.about.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            src={object.metadata.about.banner.url}
            alt="Imagem"
            quality={100}
            fill={true}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {object.metadata.services.map((item) => (
          <article key={item.description} className={styles.service}>
            <div className={styles.innerServices}>
              <Image  
                src={item.image.url}
                alt={item.description}
                fill={true}
                quality={100}
                priority={true}
                className={styles.imageService}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
              />
            </div>
            <p className={styles.descriptionServices}>{item.description}</p>
          </article>
        ))}
      </section>

    </>
  )
}