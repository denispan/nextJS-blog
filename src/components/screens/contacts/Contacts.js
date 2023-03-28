import Heading from "@/components/heading/Heading";
import Head from "next/head";
import Link from "next/link";

const Contacts = ( { contacts } ) => {

  return (
    <>
      <Head>
        <title>
          Contacts
        </title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {
          contacts && contacts.map(({id, name, email}) => (
              <li key={id}>
                <Link href={"/contacts/" + id}><b>{name}</b>, email: {email}</Link>
              </li>
            ))
        }
      </ul>
    </>
  )
}

export default Contacts;
