import React from "react";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className={styles.homepage}>
        {/* Photo */}
        <div>
          <div className={styles.portrait}>
            <img src="/photo.jpeg" alt="Portrait of me" width="100%" />
          </div>
        </div>

        {/* Overlay text */}
        <div className={styles.overlay}>
          <h1 className={styles.title}>Brooke Weil</h1>
          <h2 className={styles.subtitle}>
            <a href="https://www.linkedin.com/in/brookeweil/">LinkedIn</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
