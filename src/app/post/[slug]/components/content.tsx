import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import Image from "next/image";
import styles from "./content.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import { PostProps } from "@/utils/post.type";
import { getItemBySlug } from "@/utils/actions/get-data";

export async function Content({ slug }: { slug: string } ) {

  const { objects }: PostProps = await getItemBySlug(slug);

  const post = objects[0];

  return (
    <>
      <Hero
        heading={post.title}
        buttonTitle={post.metadata.button.button}
        buttonUrl={post.metadata.button.url}
        bannerUrl={post.metadata.banner.url}
        icon={<FaWhatsapp size={25} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>

          <article className={styles.innerAbout}>
            <h2 className={styles.title}>
              {post.metadata.description.title}
            </h2>
            <p>
              {post.metadata.description.text}
            </p>

            {post.metadata.description.button_active && (
              <a 
                href={post.metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {post.metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image 
              src={post.metadata.banner.url}
              alt="Banner" 
              fill={true}
              quality={100}
              className={styles.imageAbout}
              priority={true}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
            />
          </div>

        </section>
      </Container>
    </>
  )
}