import style from "./styles.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "correct" | "wrong";
};

export function Letra({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    <div
      className={[
        style.letra,
        size === "small" && style.letterSmall,
        color === "correct" && style.letterCorrect,
        color === "wrong" && style.letterWrong,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{value}</span>
    </div>
  );
}
