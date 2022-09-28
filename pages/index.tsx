import type { NextPage } from "next";
import Head from "next/head";
import { TodoList } from "../components/Todos/TodoList/TodoList";
import styled from "styled-components";
import { NewsBoard } from "../components/News/NewsBoard";
import { Temperature } from "../components/Temperature/Temperature";

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
      <main>
        <NewsBoard />
        <TodoList />
        <Temperature />
      </main>
    </AppContainer>
  );
};

export default Home;
