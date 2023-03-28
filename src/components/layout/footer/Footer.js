import Heading from "@/components/heading/Heading";
import styles from "./Footer.module.scss";

const Footer = ({ tag, text }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Heading tag="h2" text="Created by dp"/>
      </div>
    </footer>
  )
}

export default Footer;
