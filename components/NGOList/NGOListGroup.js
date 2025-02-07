import { useEffect, useState } from "react";
import styles from "./NGOList.module.scss";
import Image from "next/image";
import Card from "../Card/Card";


const requestURLs = {
  openings:
    "https://v2.api.atados.com.br/organization/list?limit=5&ordering=-published,-published_date&paused=false&published=true&search=Design",
  ongs: "https://v2.api.atados.com.br/organization/list?limit=5&ordering=-published,-published_date&published=true",
};

const listURLs = {
  openings: "https://atados.com.br/vagas?query=design",
  ongs: "https://atados.com.br/ongs",
};

const linkURLs = {
  openings: "https://atados.com.br/vaga/",
  ongs: "https://atados.com.br/ong/",
};

const NGOListGroup = ({ data }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetch(requestURLs[data.ngoListType]).catch(() => {
        setError((oldState) => {
          const newState = [...oldState];
          newState.push(data.ngoListType);
          return newState;
        });
      });
      if (response) {
        const jsonData = await response.json();
        const jsonList = jsonData.results;
        setList(jsonList);
      }
    };
    fetchList();
  }, [data.ngoListType]);

  return (
    <article className={styles.list}>
      <h2>{data.ngoListTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.ngoListIntro }}></div>
      {error.includes(data.ngoListType) ? (
        <div className={styles.error}>
          Houve um erro ao acessar os dados. Por favor, acesse
          diretamente o <a href="https://atados.com.br" target="_blank">site da Atados</a> para mais informações.
        </div>
      ) : (
        <div>
          {list?.map((item) => (
            <Card
              key={item.id}
              isInternalLink
              link={`${linkURLs[data.ngoListType]}${item.slug}`}
              introduction={item.description}
              title={item.organization ? item.organization.name : item.name}
              tags={item.causes?.map((cause) => cause.name)}
            />
          ))}
          <a
            href={`${listURLs[data.ngoListType]}`}
            target="_blank"
            className={styles.atados}
          >
            <Image
              src="logo-atados.svg"
              width={32}
              height={32}
              alt="Logo do projeto Atados"
            />
            <p>{data.ngoListLink}</p>
          </a>
        </div>
      )}
    </article>
  );
};

export default NGOListGroup;
