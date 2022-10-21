import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          About to <a href="/about">Last Air bender app!</a>
        </h1>

        <div className={styles.grid}>
         

          <a href="/avatars" className={styles.card}>
            <h2>Avatars &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      
    </div>
  );
}
