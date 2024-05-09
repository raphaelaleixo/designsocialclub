import Link from "next/link";
import styles from "./Card.module.scss";

const Card = ({ isInternalLink, link, title, introduction, tags }) => {
  const LinKComponent = isInternalLink ? Link : "a";
  return (
    <LinKComponent
      className={styles.card}
      href={link}
      target={isInternalLink ? "" : "_blank"}
    >
      <h3>{title}</h3>
      <p>{introduction}</p>
      <div className={styles.tags}>
        {tags ? tags.map((tag) => (
          <span key={tag}>{tag}</span>
        )) : false}
      </div>
    </LinKComponent>
  );
};

export default Card;
