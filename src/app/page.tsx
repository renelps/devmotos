import styles from "./page.module.css";
import { SubMenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "../utils/actions/get-data"
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import { FaWhatsapp } from "react-icons/fa";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import { MenuProps } from "@/utils/menu.type";
export default async function Home() {

  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  console.log(menu.object.length)

  return (
    <main className={styles.container}>
      {menu.object.length > 0 && <SubMenu menu={menu}/>}
      <Hero 
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<FaWhatsapp size={25} color="#fff"/>}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
