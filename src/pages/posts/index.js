import Posts from "@/components/screens/posts/Posts.js";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data },
  }
};


const PostsPage = ({ posts } ) => {

  return (
    <Posts posts={posts}/>
  )
}

export default PostsPage;
