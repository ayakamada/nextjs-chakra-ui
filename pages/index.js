import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import Nabar from "../components/Nabar";
import Features from "../components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Nabar />
      <Features />
    </>
  );
}
