import IAmA from "../IAmA";
import Image from "next/image";
import styles from "./about-me.styles.module.css";
import commonStyles from "../styles.module.css";

export default function AboutMe() {
  return (
    <>
      <div className={`flex flex-col md:flex-row md:gap-10 ${styles.aboutMe}`}>
        <div className="min-w-fit flex flex-col gap-2 items-center">
          <Image
            src="/headshot-zoom.jpg"
            width={250}
            height={250}
            alt="Image of Ashley Norman"
            className={styles.image}
          />
          <IAmA className="text-center" />
        </div>
        <div className="md:grow leading-loose">
          <p>
            I have over 10 years of experience developing web applications. From
            UX design and UI/API development, to data management and system
            architecture, I have a track record of doing what needs to be done
            to bring applications to production and maintain high quality as new
            features are integrated into deployed applications.
          </p>
          <p>
            I am skilled and/or familiar with tons of different tools & tech. In
            these times of constantly changing technology, I have foundational
            knowledge in plain JavaScript, system architecture, and cloud
            technologies to ensure any application can function at scale. I have
            meticulous attention to detail and{" "}
            <span
              className={`font-bold tracking-widest ${commonStyles.darkGradientText}`}
            >
              I always sweat the small stuff.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
