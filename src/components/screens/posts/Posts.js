import Heading from "@/components/heading/Heading";
import Head from "next/head";
import Link from "next/link";

const Posts = ( { posts } ) => {

  return (
    <>
      <Head>
        <title>
          Posts
        </title>
      </Head>
      <Heading text="Posts list:" />
      <ul>
        {
          posts && posts.map(({id, title}) => (
              <li key={id}>
                <Link href={"/posts/" + id}><b>{title}</b></Link>
              </li>
            ))
        }
      </ul>
    </>
  )
}

export default Posts;
