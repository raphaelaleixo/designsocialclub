import Section from "../Section/Section";
import styles from "./HowItWorks.module.scss";

const HowItWorks = ({ data }) => {
  return (
    <Section title={data.howItWorkTitle}>
      <article className={styles.howItWorks}>
        <div dangerouslySetInnerHTML={{ __html: data.howItWorkIntro }} />
        <div dangerouslySetInnerHTML={{ __html: data.howItWorkContent }} />
      </article>
    </Section>
  );
};

export default HowItWorks;
