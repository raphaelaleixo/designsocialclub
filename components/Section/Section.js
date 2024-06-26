import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Section.module.scss";
import { FiChevronDown } from "react-icons/fi";

const Section = ({ children, title, closed = true }) => {
  const [isClosed, setIsClosed] = useState(closed);

  const toggleAccordeon = useCallback(() => {
    setIsClosed(!isClosed);
  }, [isClosed]);

  return (
    <section className={styles.section}>
      <h1 onClick={toggleAccordeon}>
        <span>{title}</span>
        <FiChevronDown
          style={{ transform: isClosed ? "rotate(-90deg)" : "none" }}
        />
      </h1>
      <div
        style={{
          maxHeight: isClosed ? 0 : "5000px",
          paddingBottom: isClosed ? 0 : "5em",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
