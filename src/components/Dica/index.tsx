import styles from "./style.module.css";
import tipIcone from "../../assets/tip.svg";

type Props = {
  tip: string;
};

export function Dica({ tip }: Props) {
    return (
      <div>
            <img src={tipIcone} alt="icone de dica" className={styles.icon} />;
            
            <div>
                <h3>Dica</h3>
                <p>{tip}</p>
            </div>
      </div>
    );
}
