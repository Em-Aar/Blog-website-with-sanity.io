import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";



export default async function Blogs() {
  const query = groq`*[_type=='blog'] | order(_updatedAt desc){
    title,summary,image,"slug":slug.current
  }`;
  const blogs = await client.fetch(query);

  return blogs;
}
