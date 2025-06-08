import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";
interface HeroProps {
  heading: string;
  buttonTitle: string;
  buttonUrl: string;
  bannerUrl: string;
  icon: ReactNode;
}

export function Hero({ heading, bannerUrl, buttonTitle, buttonUrl, icon }: HeroProps ) {
  return (
    <main className={styles.container}>
      <div className={styles.containerHero}>
        <h2 className={styles.title}>{heading}</h2>

        <a 
          target="_blank"
          href={buttonUrl}
          className={styles.link}
        >
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contantBanner}>
        <Image
          className={styles.banner}
          src={bannerUrl}
          alt="Banner"
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
        />
      </div>
    </main>
  )
}