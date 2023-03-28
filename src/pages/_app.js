import "@/styles/globals.scss"
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import ham from "/public/hamster.jpeg";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default MyApp;
