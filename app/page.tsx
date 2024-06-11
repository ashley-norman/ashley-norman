"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import AboutMe from "./components/AboutMe";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/Skills";
import { Link } from "react-scroll";

type SectionHeaderProps = { title: string; color: string };
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, color }) => {
  return (
    <h2
      style={{ color }}
      className="text-4xl mb-6 font-black tracking-widest text-center md:text-left"
    >
      {title}
    </h2>
  );
};

type SectionProps = {
  title: string;
  titleColor: string;
  children: React.ReactNode;
  className?: string;
};
const Section: React.FC<SectionProps> = ({
  title,
  titleColor,
  className,
  children,
}) => {
  return (
    <section className={`p-7 lg:p-16 ${className ? className : ""}`}>
      <SectionHeader title={title} color={titleColor} />
      {children}
    </section>
  );
};

export default function Home() {
  const footerClasses = `opacity-50 hover:opacity-100 cursor-pointer`;
  return (
    <>
      <main>
        <section
          id="home"
          className={`flex min-h-screen flex-col items-center p-10 lg:p-24 bg-slate-950 ${styles.texturedBg}`}
        >
          <div className="absolute top-0 right-0 text-xs text-white text-opacity-15">
            Photo by{" "}
            <a href="https://unsplash.com/@grndezyns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Peter Gargiulo
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-black-and-white-photo-of-a-dark-background-cGNCepznaV8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </div>
          <div className="grow flex flex-col gap-4 place-items-center text-center justify-center">
            <h1 className={`text-6xl lg:text-8xl font-bold ${styles.heroText}`}>
              Ashley Norman
            </h1>
            <h2 className="text-white text-xl lg:text-3xl">
              Full-stack Software Engineer
            </h2>
            <button
              className={`text-white p-4 ${styles.aboutMeButton} ${styles.gradientBorder} hover:bg-white hover:bg-opacity-10 transition cursor-pointer`}
            >
              <Link to="aboutMe" smooth={true} duration={500}>
                About Me
              </Link>
            </button>
          </div>
        </section>
        <div id="aboutMe">
          <Section
            title="About"
            titleColor="#f846ca"
            className={`${styles.gradientBorder} ${styles.gradientBorderTop} ${styles.sectionBorder}`}
          >
            <AboutMe />
          </Section>
        </div>
        {/* <Section
          title="Portfolio"
          titleColor="#11cf56"
          className={`bg-slate-950 ${styles.gradientBorder} ${styles.sectionBorder} ${styles.texturedBg}`}
        >
          Info here
        </Section> */}
        {/* <Section title="Contact" titleColor="#db9b09">
          Info here
        </Section> */}
        <Section
          title="Skills"
          titleColor="#11cf56"
          className={`bg-slate-950 text-white ${styles.gradientBorder} ${styles.texturedBg} ${styles.sectionBorder}`}
        >
          <Skills />
        </Section>
        <Section title="Contact Me" titleColor="#db9b09">
          <p className="md:grow leading-loose">
            If you have a project or role that may fit my skills, you want to
            learn more about the projects I have worked on, or you just want to
            network and connect, feel free to{" "}
            <a
              href="mailto:ashley.ansell@gmail.com?subject=Inquiry from your portfolio"
              target="_blank"
              className={`font-bold tracking-widest ${styles.darkGradientText} underline underline-offset-1`}
            >
              send me a message!
            </a>
          </p>
        </Section>
      </main>
      <footer
        className={`relative bg-slate-950 text-white ${styles.gradientBorder} ${styles.texturedBg} ${styles.sectionBorder}`}
      >
        {/* <div className={styles.footerGradient} /> */}
        <div className="flex p-16 text-3xl gap-4 justify-center md:p-24 md:text-4xl md:gap-8">
          <a
            href="mailto:ashley.ansell@gmail.com?subject=Inquiry from your portfolio"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} className={footerClasses} />
          </a>
          <a href="https://github.com/ansela" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={footerClasses} />
          </a>
          <a href="https://www.linkedin.com/in/ashleyansell/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={footerClasses} />
          </a>
        </div>
        <button
          className={`text-white rounded-full bg-zinc-800 py-2 px-3 absolute bottom-3 right-3 cursor-pointer`}
        >
          <Link to="home" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faAnglesUp} />
          </Link>
        </button>
      </footer>
    </>
  );
}
