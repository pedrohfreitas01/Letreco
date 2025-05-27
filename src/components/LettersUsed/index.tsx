import { Letra } from "../Letra";
import styles from "./styles.module.css";

export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LettersUsedProps[];
};

export function LettersUsed({ data }: Props) {
  return (
    <div className={styles.letterUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        {data.map(({ value, correct }) => (
          <Letra
            key={value}
            value={value}
            size="small"
            color={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
