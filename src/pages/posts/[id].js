import PostContent from "@/components/postcontent/PostContent";
import Head from "next/head";


export const getStaticPaths = async (context) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => (
    {
    params: { id: id.toString() },
  }
  ));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostContent post={post}/>
    </>
  )
}

export default Post;
