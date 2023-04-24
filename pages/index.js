import { Poppins, Roboto_Mono } from "next/font/google";
import Metadata from "@/components/Metadata";
import Introduction from "@/components/Introduction/Introduction";
import Header from "@/components/Header/Header";
import NGOList from "@/components/NGOList/NGOList";
import { getHomeData } from "@/lib/api";
import Section from "@/components/Section/Section";
import Link from "next/link";
import Card from "@/components/Card/Card";
import ArticleList from "@/components/Article/ArticleList";
import Footer from "@/components/Footer/Footer";

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
      <Metadata />
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
