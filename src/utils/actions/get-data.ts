import { redirect } from "next/navigation";
import { MenuProps } from "../menu.type";

export async function getDataHome(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/68386923d24ecf96b18369fc?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 }});

    if(!res.ok) {
      throw new Error("Failed to fetch data")
    }
    
    return res.json();
  }catch(err) {
    console.log(err);
    throw new Error("Failed to fetch data")
  }
}

export async function getSubMenu(): Promise<MenuProps> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=${encodeURIComponent(
        JSON.stringify({ type: "pages" })
      )}&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`,
      {
        next: { revalidate: 120 }
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch submenu");
    }

    const data = await res.json();

    return {
      object: data.objects ?? []
    };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch menu data");
  }
}

export async function getItemBySlug(itemSlug: string){
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;


  const queryParam = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: 'slug,title,metadata,content',
    read_key: process.env.READ_KEY as string,
  })

  const url = `${baseUrl}?${queryParam.toString()}`

  try {
    const res = await fetch(url, { next: { revalidate: 120 }})

    if(!res.ok){
      throw new Error("Failed get item by slug");      
    }

    return res.json()
  }catch(err) {
    console.log(err)
    redirect("/")
  }
}