import './App.module.css'
import { Header } from './components/Header'
import style from "./App.module.css"
import { Dica } from './components/Dica';


function App() {

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={style.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />
        <Dica tip="linguagem usada muito em jogos "/>
      </main>
    </div>
  );
}

export default App
