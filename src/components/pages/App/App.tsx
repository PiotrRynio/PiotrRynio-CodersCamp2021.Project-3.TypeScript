import React from "react";
import styles from "./App.module.css";
import { SearchAppBar } from "components/organisms/SearchAppBar/SearchAppBar";

function App() {
  return (
    <>
      <div className={styles.background}></div>
      <SearchAppBar />
    </>
  );
}

export default App;
