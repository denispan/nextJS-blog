import Head from "next/head";
import style from "./Social.module.scss";
import Image from "next/image";

const Socials = ({socials}) => {
  return (
    <ul className={style.list}>
      {socials && socials.map(({id, icon, path, width, height}) => (
        <li key={id}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <Image src={icon} width={width} height={height} alt='social'/>
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Socials
