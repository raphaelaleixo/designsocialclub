import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Esta obra está licenciada com uma Licença{" "}
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          Creative Commons Atribuição-NãoComercial 4.0 Internacional
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
