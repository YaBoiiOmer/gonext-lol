import StatsPageNavbar from "./StatsPageNavbar";
import style from "../../assets/styles/pages/StatsPage.module.css";
import Match from "./Match";

function StatsPage() {
  return (
    <div className={style.StatsPage}>
      <StatsPageNavbar></StatsPageNavbar>
      <div className={style.MatchHistory}>
        <Match outcome="Defeat"></Match>
        <Match outcome="Victory"></Match>
        <Match outcome="Remake"></Match>
      </div>
    </div>
  );
}

export default StatsPage;
