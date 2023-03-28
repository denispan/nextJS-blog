import Heading from "@/components/heading/Heading";
import Socials from "@/components/socials/Socials";
import Head from "next/head";
import styles from "./Home.module.scss";

const Home = ({ socials }) => {
  return (
    <>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <div className={styles.wrapper}>
        <Heading text="Hello world" />
        <div className={styles.socials}>
          <Socials socials={socials}/>
        </div>

      </div>
    </>
  )
}

export default Home;
