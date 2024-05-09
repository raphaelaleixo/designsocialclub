import Card from "../Card/Card";
import Section from "../Section/Section";
import styles from "./Article.module.scss";

const ArticleList = ({ articles }) => {
  return (
    <Section title="Materiais de apoio">
      <div className={styles.intro}>
        <h2>
          Uma lista de links e artigos que podem ser úteis para designers e
          instituições em busca de trabalhos voluntários
        </h2>
        <p>
          Se você tem alguma sugestão de link, ou até mesmo de artigos, escreva
          para{" "}
          <a href="mailto:blog@designsocial.club">blog@designsocial.club</a>{" "}
          para que possa ser analisado. Exemplos de trabalhos já feitos para
          voluntariados também são bem vindos.
        </p>
      </div>
      <div className={styles.articleList}>
        {articles ? articles.map((article) => {
          const isBlogPost = article.articleType === "article";
          return (
            <Card
              isInternalLink={isBlogPost}
              key={article.id}
              link={isBlogPost ? `/materiais/${article.slug}` : article.link}
              title={article.title}
              introduction={article.introduction}
              tags={[isBlogPost ? "Blog" : "Link externo"]}
            />
          );
        }) : false }
      </div>
    </Section>
  );
};

export default ArticleList;
