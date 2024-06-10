import Image from "next/image";
import styles from "./styles.module.css";
import AboutMe from "./components/AboutMe";
import React from "react";

type SectionHeaderProps = { title: string; color: string };
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, color }) => {
  return (
    <h2 style={{ color }} className="text-4xl mb-6 font-black tracking-widest">
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
      {/* <h2 className="text-4xl mb-6 font-black tracking-widest">About</h2> */}
      <SectionHeader title={title} color={titleColor} />
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main>
        <section
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
              className={`text-white p-4 ${styles.aboutMeButton} ${styles.gradientBorder} hover:bg-white hover:bg-opacity-10 transition`}
            >
              About Me
            </button>
          </div>
        </section>
        <Section title="About" titleColor="#f846ca">
          <AboutMe />
        </Section>
        <Section
          title="Portfolio"
          titleColor="#11cf56"
          className={`bg-slate-950 ${styles.gradientBorder} ${styles.sectionBorder} ${styles.texturedBg}`}
        >
          Info here
        </Section>
        <Section title="Contact" titleColor="#db9b09">
          Info here
        </Section>
      </main>
      <footer
        className={`bg-slate-950 text-white ${styles.footer} ${styles.texturedBg}`}
      >
        <div className="p-7">Footer</div>
      </footer>
    </>
  );
}
