import "./App.module.css";
import { Header } from "./components/Header";
import style from "./App.module.css";
import { Dica } from "./components/Dica";
import { Letra } from "./components/Letra";
import { Input } from "./components/Input";

function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  return (
    <div className={style.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />
        <Dica tip="linguagem usada muito em jogos " />

        <div className={style.palavra}>
          <Letra value="R" />
          <Letra value="e" />
          <Letra value="a" />
          <Letra value="c" />
          <Letra value="t" />
        </div>

        <h4>Palpite</h4>
        <div>
          <Input autoFocus maxLength={1}  placeholder="?"/>
        </div>
      </main>
    </div>
  );
}

export default App;
