import { Play, Coins } from "lucide-react";
import { watchAdsStats } from "../../data/watchAdsData";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const progress =
    (watchAdsStats.todayEarnings / watchAdsStats.dailyGoal) * 100;

  return (
    <section className={styles.hero}>

      <div className={styles.content}>

        <span className={styles.badge}>
          <Coins size={14} />
          Earn VE Tokens
        </span>

        <h1>
          Watch Ads & Earn
          <br />
          <span>Real Rewards</span>
        </h1>

        <p className={styles.description}>
          Watch short advertisements and earn VEs.
          Convert your VEs into real cash and withdraw
          to your linked bank account.
        </p>

        <div className={styles.progressSection}>

          <div className={styles.progressHeader}>
            <span>Daily Earnings Progress</span>

            <span>
              {watchAdsStats.todayEarnings} /{" "}
              {watchAdsStats.dailyGoal} VEs
            </span>
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>

          <p>
            Keep going! You're so close to your daily goal.
          </p>

        </div>

      </div>

      <div className={styles.visual}>

        <div className={styles.glow}></div>

        <div className={styles.videoCard}>
          <div className={styles.videoTop}></div>

          <div className={styles.playButton}>
            <Play size={36} fill="white" />
          </div>

          <div className={styles.videoControls}>
            <span></span>
            <div></div>
          </div>
        </div>

        <div className={styles.coin}>
          VE
        </div>

        <div className={`${styles.coinSmall} ${styles.coinOne}`}>
          VE
        </div>

        <div className={`${styles.coinSmall} ${styles.coinTwo}`}>
          VE
        </div>

      </div>

    </section>
  );
};

export default HeroSection;