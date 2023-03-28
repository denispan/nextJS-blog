import Heading from "@/components/heading/Heading";
import Head from "next/head";

const ContactInfo = (contact) => {
  const {name, address, email} = contact.contact || {};
  const {city, street, suite} = address || {};

  if (!name) {
    return (
      <Heading tag={"h2"} text={"Пустой контакт"} />
    )
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Heading tag={"h1"} text={name} />
      <p>
        {email}
      </p>
      <p>
        {`${city}, ${street}, ${suite}`}
      </p>
    </>
  )
};

export default ContactInfo;
