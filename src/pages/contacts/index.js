import Contacts from "@/components/screens/contacts/Contacts.js";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
};


const ContactsPage = ( { contacts } ) => {

  return (
    <Contacts contacts={contacts}/>
  )
}

export default ContactsPage;
