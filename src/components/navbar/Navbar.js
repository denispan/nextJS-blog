import styles from "@/components/navbar/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const NAV_LINKS = [
  {id: 1, title: 'Home', path: '/'},
  {id: 2, title: 'Posts', path: '/posts'},
  {id: 3, title: 'Contacts', path: '/contacts'},
  {id: 4, title: 'wrongLink', path: '/contacts222'},
]

const Navbar = () => {
  const { pathname } = useRouter();


  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width="55" height="57" alt='logo'/>
      </div>
      <div className={styles.links}>
        {NAV_LINKS.map(({id, title, path}) => (
            <Link
              key={id}
              href={path}
              className={ pathname === path ? styles.active : null}
            >
              {title}
            </Link>
          ))}
      </div>
    </nav>
  )
}

export default Navbar;
