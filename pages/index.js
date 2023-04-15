import Head from "next/head";
import Image from "next/image";
import { Poppins, Roboto_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/logo";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });
const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Design Social Club :)</title>
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#242B53" />
        <meta name="apple-mobile-web-app-title" content="Design Social Club" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="application-name" content="Design Social Club" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designsocial.club/" />
        <meta property="og:title" content="Design Social Club" />
        <meta
          property="og:description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
        <meta property="og:image" content="https://designsocial.club/social.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://designsocial.club/" />
        <meta property="twitter:title" content="Design Social Club" />
        <meta
          property="twitter:description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
        <meta property="twitter:image" content="https://designsocial.club/social.png" />
        <meta name="description" content="Vamos juntar designers com projetos reais de impacto social." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242B53" />
        <meta name="msapplication-TileColor" content="#242B53" />
      </Head>
      <main className={roboto.className}>
        <header>
          <Logo />
          <h2 className={poppins.className}>
            Designers ajudando a fazer um mundo melhor.
          </h2>
          <p>Vamos juntar designers com projetos reais de impacto social.</p>
        </header>
        <article>
          <h1 className={poppins.className}>
            O mundo não precisa de mais um redesign da interface do Netflix.
          </h1>
          <p>
            Muitos designers em início de carreira, em busca de material para
            colocar em seus portfólios, acabam caindo na armadilha de fazer
            projetos onde o alvo é o design já existente de uma marca
            consolidada: Uma nova versão da interface da Netflix, da marca do
            McDonalds, do poster do filme da Marvel… Ainda que projetos “falsos”
            sejam uma ferramenta muito boa para que designers gerem seus
            portfólios, esse tipo de iniciativa gera alguns problemas.
          </p>
          <p>
            O primeiro é que fazer um projeto onde não existe a real inteção de
            produzí-lo de fato, tira boa parte dos fatores que julgam o que
            torna um design bom ou não. Redesenhar a interface de um app, pelo
            simples fato do redesign, é sem propósito: Quais os objetivos? Como
            medir os resultados? Quais eram as restrições?
          </p>
          <p>
            Além disso, no fim das contas, mesmo com o melhor dos projetos,
            designers vão estar trabalhando de graça para empresas que tem
            milhões/bilhões de dólares.
          </p>
          <h2 className={poppins.className}>
            O design pode ajudar a mudar o mundo.
          </h2>
          <p>
            A verdade é que o trabalho de design é muito importante, e tem muita
            gente que realmente precisa dele. Instituições sem fins lucrativos
            precisando de uma nova marca ou um site, grupos marginalizados
            produzindo conteúdo que poderia ter seu layout melhorado, eventos
            que precisam de alguma divulgação melhor em redes sociais… Existem
            inúmeros projetos de design que estão pedindo para serem iniciados.
          </p>
          <h2 className={poppins.className}>O projeto</h2>
          <p>
            A ideia com o “Design Social Club” é juntar designers com
            instituições, eventos ou iniciativas sem fins lucrativos, de forma
            que ambos se ajudem mutualmente. Projetos de diferentes formatos
            podem surgir dessa ajuda: Novas marcas, sites, aplicativos,
            identidades para redes sociais. Permitir que designers ajudem a
            criar algo que vai ter um impacto verdadeiro.
          </p>
          <h2 className={poppins.className}>Qual a vantagem pros designers?</h2>
          <p>
            Ao invés de trabalhar de graça para um projeto completamente
            fictício, trabalhar de graça para um projeto real permite que eles
            entendam todo o processo do design: Análise de requisitos e
            restrições, aprovações com clientes, métricas de pós-lançamento,
            resultados… Mais do que simplesmete algo bonito para ter no
            portfólio, um projeto real permite que designers tenham realmente
            sobre o que falar ao apresentar seus trabalhos.
          </p>
          <h2 className={poppins.className}>
            Qual a vantagem pras instituições, eventos ou iniciativas?
          </h2>
          <p>
            Ter um olhar de design sobre seu material sempre é útil. Ter acesso
            a jovens designers com energia, tempo e vontade para ajudar no
            projeto pode tornar seu alcance ainda maior, ao mesmo tempo que
            ajuda com a formação de novos profissionais dessa área.
          </p>
          <h2 className={poppins.className}>Próximos passos</h2>
          <p>
            Para poder começar esse “clube”, precisamos primeiro ter contato com
            essas instuições e organizações, para fazer uma lista que
            futuramente será disponibilizada para que os designers possam
            procurar e entrar em contato. Se você faz parte de alguma dessas
            instituições sem fins lucrativos, ou conhece alguma organização que
            possa se interessar por essa iniciativa, por favor entre em contato
            com:{" "}
            <a href="mailto:meuprojeto@designsocial.club">
              meuprojeto@designsocial.club
            </a>
            .
          </p>
          <p>
            Assim que tivermos um número inicial de projetos, a ideia será
            disponibilizá-los numa plataforma, onde os designers poderão
            pesquisar e entrar em contato com essas iniciativas e organizações. Se você é designer e quer se cadsatrar, ou dar alguma opinião sobre o projeto, entre em contato pelo e-mail:  
            <a href="mailto:contato@designsocial.club">
              contato@designsocial.club
            </a>.
          </p>
          <h2 className={poppins.className}>Com cuidado</h2>
          <p>
            A intenção do clube é permitir o contato entre os designers e as
            empresas, mas vamos ter cuidado para que não hajam abusos de nenhum
            dos lados. Que seja uma relação realmente colaborativa, e não um
            cenário onde o designer se sinta explorado, nem a instituição se
            sinta lesada de alguma forma. O único propósito com o projeto é
            criar parcerias.
          </p>
          <h2 className={poppins.className}>Um clube aberto</h2>
          <p>
            A ideia é essa: Um clube aberto para que designers e iniciativas que
            querem criar um impacto no mundo se ajudem. E isso é apenas o
            primeiro, pequeno passo nessa direção. Se alguém quer ajudar a
            direcionar o caminho desta iniciativa, estamos ouvindo em: 
            <a href="mailto:contato@designsocial.club">
              contato@designsocial.club
            </a>
          </p>
        </article>
      </main>
    </>
  );
}
