const { default: Section } = require("../Section/Section");
import styles from "../Introduction/Introduction.module.scss";

const Mentoring = () => {
  return (
    <Section title="Mentoria">
      <article className={styles.introduction}>
        <p>
          Para ajudar tanto as instituições como os designers, este Clube também
          se interessa em oferecer mentoria e feedback para que designers possam
          criar melhores projetos, e também para que ONGs possam melhor
          comunicar suas necessidades com os designers.
        </p>
        <p>
          Então, se você tem algum interesse nesse tipo de ajuda, escreva para{" "}
          <a href="mailto:mentoria@designsocial.club">
            mentoria@designsocial.club
          </a>{" "}
          que vamos tentar ajudar. Da melhor forma possível, o mais rápido que for viável. :)
        </p>
        <h2>Mais mentores, mais ajuda</h2>
        <p>Se você é um designer mais experiente e se interessa pela ideia de ajudar outros designers a criarem projetos incríveis para um monte de instituições sem fins lucrativos, entre em contato. Conforme novos pedidos de ajuda e feedback forem surgindo, vamos apresentar um ao outro, de forma que mais parcerias possam surgir.</p>
        <p>Como dissemos, na introdução, esta é apenas a primeira iteração desse projeto. Estamos abertos a todo tipo de sugestão que possa tornar este clube realmente útil.</p>
      </article>
    </Section>
  );
};

export default Mentoring;
