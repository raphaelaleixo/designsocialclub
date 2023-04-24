import Section from "../Section/Section";
import styles from "./Introduction.module.scss";

const Introduction = ({ data }) => {
  return (
    <Section title={data.introTitle}>
      <article
        className={styles.introduction}
        dangerouslySetInnerHTML={{ __html: data.introText }}
      />
    </Section>
  );
};

export default Introduction;
