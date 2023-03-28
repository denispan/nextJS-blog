import Heading from "@/components/heading/Heading";
import Head from "next/head";

const PostContent = ({post}) => {
  const {title, body} = post || {};

  if (!title) {
    return (
      <Heading tag={"h2"} text={"Пост не найден"} />
    )
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading tag={"h1"} text={title} />
      <p>
        {body}
      </p>
    </>
  )
};

export default PostContent;
