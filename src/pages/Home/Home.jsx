import { useContext } from "react";
import { DarkThemeContext } from "../../contexts/DarkTheme";
import "./Home.css";
export function Home() {
  const { darkTheme } = useContext(DarkThemeContext);

  return (
    <>
      <DarkThemeContext.Provider id={darkTheme}>
        <div class="home">HOME</div>
      </DarkThemeContext.Provider>
    </>
  );
}
