import Heading from "@/components/heading/Heading";
import Head from "next/head";
import { useState, useEffect } from "react";

const Contacts = () => {

  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await responce.json();
      setContacts(data);
    };
    fetchData();
  }, [])



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
                <b>{name}</b>, email: {email}
              </li>
            ))
        }
      </ul>
    </>
  )
}

export default Contacts;
