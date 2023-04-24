import Card from "../Card/Card";
import Section from "../Section/Section";
import styles from "./Article.module.scss";

const ArticleList = ({ articles }) => {
  return (
    <Section title="Materiais de apoio">
      <div className={styles.articleList}>
        {articles.map((article) => {
          const isBlogPost = article.articleType === "article";
          return (
            <Card
              isInternalLink={isBlogPost}
              key={article.id}
              link={isBlogPost ? `/materiais/${article.slug}` : article.link}
              title={article.title}
              introduction={article.introduction}
              tags={[isBlogPost ? 'Blog' : 'Link externo']}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default ArticleList;
