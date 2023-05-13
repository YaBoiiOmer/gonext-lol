import style from "../../assets/styles/components/Match.module.css";

interface MatchProps {
  outcome: "Victory" | "Defeat" | "Remake";
}

export default function Match({ outcome }: MatchProps) {
  return (
    <div className={`${style.Match} ${style[outcome]}`}>
      <div className={style.SummonerSpells}>
        <Icon icon="src/assets/profileexample/SummonerFlash.webp"></Icon>
        <Icon icon="src/assets/profileexample/SummonerDot.webp"></Icon>
      </div>
      <div className={style.Champion}></div>
    </div>
  );
}

interface IconProps {
  icon: string;
}

export function Icon({ icon }: IconProps) {
  const customStyle = icon ? { backgroundImage: `url(${icon})` } : { backgroundImage: "" };
  return <div className={style.Icon} style={customStyle}></div>;
}
