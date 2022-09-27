import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { TodoList } from "../components/Todos/TodoList/TodoList";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 100px;
`;

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Gdday Aghy!</title>
        <meta name="an organizer app" content=" made with ♥ by Aghy for Aghy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TodoList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </AppContainer>
  );
};

export default Home;
