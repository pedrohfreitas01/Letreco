import style from "./styles.module.css";

type Props = {
  value?: string;
};

export function Letra({ value = "" }: Props) {
  return (
    <div className={style.letra}>
      <span>{value}</span>
    </div>
  );
}
