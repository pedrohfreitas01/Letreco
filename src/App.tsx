import "./App.module.css";
import { Header } from "./components/Header";
import style from "./App.module.css";
import { Dica } from "./components/Dica";
import { Letra } from "./components/Letra";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed";
import { useEffect, useState } from "react";
import { WORDS, type Challenge } from "./utils/worlds";

function App() {
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState("");
  const [letterUsed, setLetterUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>();


  const ATEEMP_MARGIN = 4

  function handleRestartGame() {
    const isConfirmed = window.confirm("Voce quer reiniciar o jogo?")

    if (isConfirmed) {
      startGame()
    }
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLetterUsed([]);
  }

  function endGame(message: string ){
    alert(message)
    startGame()
  }

  function handleConfirm() {
    if (!challenge) {
      return;
    }

    if (!letter.trim()) {
      return alert("Digite uma letra");
    }

    const value = letter.toUpperCase();
    const exists = letterUsed.find(
      (used) => used.value.toLocaleUpperCase() === value
    );

    if (exists) {
      setLetter("")
      return alert("Voce ja utilizou essa letra: " + value);
    }

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetterUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);

    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (!challenge) {
      return
    }


    setTimeout(() => {
      if (score === challenge.word.length) {
        return endGame("Parabens vonce consegiu a palabra")
      }

      const attemptLimit = challenge.word.length + ATEEMP_MARGIN
      if (letterUsed.length === attemptLimit) {
        return endGame("que pena , voce perdeu ! ")
      }

    }, 200)
  },[score, letterUsed.length])

  if (!challenge) {
    return;
  }

  return (
    <div className={style.container}>
      <main>
        <Header
          current={letterUsed.length}
          max={challenge.word.length + ATEEMP_MARGIN}
          onRestart={handleRestartGame}
        />
        <Dica tip={challenge.tip} />

        <div className={style.palavra}>
          {challenge.word.split("").map((letter, index) => {
            const letterPicked = letterUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );
            return (
              <Letra
                key={index}
                value={letterPicked?.value}
                color={letterPicked?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>
        <div className={style.guess}>
          <Input
            value={letter}
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>

        <LettersUsed data={letterUsed} />
      </main>
    </div>
  );
}

export default App;
