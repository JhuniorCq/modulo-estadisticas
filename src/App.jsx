import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CoursesProvider } from "./context/CoursesContext/CoursesProvider";
import { IndicatorsProvider } from "./context/IndicatorsContext/IndicatorsProvider";
import { MyRoutes } from "./router/MyRoutes";

function App() {
  return (
    <>
      <div className={styles.mainBox}>
        <CoursesProvider>
          <IndicatorsProvider>
            <Navbar />
            <MyRoutes />
          </IndicatorsProvider>
        </CoursesProvider>
      </div>
    </>
  );
}

export default App;
