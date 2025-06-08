
import { PostProps } from "@/utils/post.type";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Metadata } from "next";
import { Content } from "./components/content";
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {

    const { objects }: PostProps = await getItemBySlug(slug)
    .catch(() => {
      return {
        title: "DevMotos - Sua Oficina",
        description: "Construa sua propria oficina",
      }
    })


    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      openGraph: {
      title: `DevMotors - ${objects[0].title}`,
      images: [`${objects[0].metadata.banner.url}`]
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
        index: true,
        follow: true,
        noimageindex: true
        }
      }
    }

  }catch(err){
    console.log(err)
    return {
      title: "DevMotos - Sua Oficina",
      description: "Construa sua propria oficina",
    }
  }
  
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  return (
  <>
    <Content slug={slug} />
  </>
  )
}