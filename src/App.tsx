import type { Component } from 'solid-js';

import { Routes, Route } from "@solidjs/router"
import Home from './pages/Home';
import styles from "./App.module.css";
import PlanetDetails from './pages/PlanetDetails';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <img
        alt="Vue logo"
        src="https://ovicio.com.br/wp-content/uploads/2022/02/20220204-ovicio-star-wars-logo-new-tall-730x365.jpg"
      />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/planet/:id" component={PlanetDetails} />
      </Routes>
    </div>
  );
};

export default App;
