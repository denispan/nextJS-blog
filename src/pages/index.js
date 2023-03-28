import Heading from "@/components/heading/Heading";
import styles from "@/components/screens/home/Home.module.scss";
import Head from "next/head";
import Socials from "@/components/socials/Socials";
import Home from "@/components/screens/home/Home";


export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const HomePage = ({socials}) => {
  return (
    <Home socials={socials} />
  )
};

export default HomePage;
