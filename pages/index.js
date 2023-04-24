import { Poppins, Roboto_Mono } from "next/font/google";
import Introduction from "@/components/Introduction/Introduction";
import Header from "@/components/Header/Header";
import NGOList from "@/components/NGOList/NGOList";
import { getHomeData } from "@/lib/api";
import ArticleList from "@/components/Article/ArticleList";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--poppins-font",
});
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--roboto-font",
});

export async function getStaticProps() {
  const response = await getHomeData();
  return { props: { home: response?.home, articles: response?.allArticles } };
}

export default function Home({ home, articles }) {
  return (
    <>
      <Head>
        <title>Design Social Club</title>
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
        <meta
          property="og:image"
          content="https://designsocial.club/social.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://designsocial.club/" />
        <meta property="twitter:title" content="Design Social Club" />
        <meta
          property="twitter:description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
        <meta
          property="twitter:image"
          content="https://designsocial.club/social.png"
        />
        <meta
          name="description"
          content="Vamos juntar designers com projetos reais de impacto social."
        />
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
      <main className={`${poppins.variable} ${roboto.variable}`}>
        <Header data={home.valueProposition[0]} />
        <Introduction data={home.introduction[0]} />
        <NGOList data={home.ngoList[0]} />
        <ArticleList articles={articles} />
        <Footer />
      </main>
    </>
  );
}
