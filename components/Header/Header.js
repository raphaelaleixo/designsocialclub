import Logo from "@/components/Logo/Logo";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = ({ data, isBlogPost }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {isBlogPost ? (
        <nav>
          <Link href="/">Página principal</Link>
        </nav>
      ) : null}
      <h1>{data.pageTitle}</h1>
      <p>{data.subtitle}</p>
    </header>
  );
};

export default Header;
