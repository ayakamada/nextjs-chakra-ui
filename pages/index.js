import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
