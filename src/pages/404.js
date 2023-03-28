import Heading from "@/components/heading/Heading";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 2000)
  }, [router]);

  return (
    <>
      <Head>
        <title>
          Error 404
        </title>
      </Head>
      <Heading text="Ошибка 404" />
      <p>Такой страницы не существует. Сейчас вы будете перенаправлены на главную страницу</p>
    </>
  )
}

export default Error;
