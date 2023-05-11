import styles from "../../assets/styles/components/StatsNavbar.module.css";
export default function StatsPageNavbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Profile}>
        <div className={styles.ProfileImage}></div>
        <div>
          <h2>YaBoiiOmer</h2>
          <h5>Level 427</h5>
        </div>
      </div>
      <StatsPageRankedComponent rank="Platinum 4" lp={29} wins={22} loses={7}></StatsPageRankedComponent>
    </div>
  );
}

interface RankedProps {
  rank: string;
  lp: number;
  wins: number;
  loses: number;
}

function StatsPageRankedComponent(props: RankedProps) {
  return (
    <div className={styles.RankedComponent}>
      <div className={styles.RankedComponentIcon}></div>
      <div className={styles.RankedComponentStats}>
        <h2>{props.rank}</h2>
        <div className={styles.RankedComponentStatsBottom}>
          <h4>{props.lp} LP</h4>
          <div className={styles.RankedComponentStatsWL}>
            <h4>
              {props.wins}W-{props.loses}L
            </h4>
            <h5>({Math.round((props.wins / (props.wins + props.loses)) * 100)}% WR)</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
