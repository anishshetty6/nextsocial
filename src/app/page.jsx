
import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>Transform your ideas into reality. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat dicta? Adipisci laboriosam in possimus!</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Get Started</button>
          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} ></Image>
      </div>
      </div>
  );
}
