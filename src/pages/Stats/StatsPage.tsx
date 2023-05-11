import StatsPageNavbar from "./StatsPageNavbar";
import style from "../../assets/styles/pages/StatsPage.module.css";
import Match from "./Match";

function StatsPage() {
  return (
    <div className={style.StatsPage}>
      <StatsPageNavbar></StatsPageNavbar>
      <div className={style.MatchHistory}>
        <Match></Match>
        <Match></Match>
      </div>
    </div>
  );
}

export default StatsPage;
