import { StructuredText } from "react-datocms/structured-text";
import styles from "./Article.module.scss";

const Article = ({ content }) => {
  return (
    <div className={styles.article}>
      <StructuredText data={content} />
    </div>
  );
};

export default Article;
