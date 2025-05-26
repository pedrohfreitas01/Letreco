import './App.module.css'
import { Header } from './components/Header'
import style from "./App.module.css"


function App() {

  function handleRestartGame() {
    alert("Reiniciar o jogo!")
  }

  return (
    <div className={style.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />
      </main>
    </div>
  );
}

export default App
