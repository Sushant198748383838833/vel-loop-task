import { Coins, Play, Wallet, Sparkles, TrendingUp } from "lucide-react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ stats, ads }) => {
  const progress = Math.min((stats.todayEarnings / stats.dailyGoal) * 100, 100);
  const completedAds = ads.filter((ad) => ad.status === "completed").length;
  const availableAds = ads.filter((ad) => ad.status !== "completed").length;

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
          Watch short, high-quality ads and turn your time into VE rewards. Earn
          real value, track your streaks, and redeem when your balance qualifies.
        </p>

        <div className={styles.metricGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricIcon}>
              <Wallet size={16} />
            </div>
            <div>
              <span>Total VEs Earned</span>
              <strong>{stats.totalVEsEarned.toLocaleString()}</strong>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricIconGreen}>
              <TrendingUp size={16} />
            </div>
            <div>
              <span>Today's Earnings</span>
              <strong>{stats.todayEarnings} VEs</strong>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricIconPurple}>
              <Sparkles size={16} />
            </div>
            <div>
              <span>Available Ads</span>
              <strong>{availableAds}</strong>
            </div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricIconGold}>
              <Coins size={16} />
            </div>
            <div>
              <span>Total Ads Completed</span>
              <strong>{completedAds}</strong>
            </div>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span>Daily Earnings Progress</span>
            <span>
              {stats.todayEarnings} / {stats.dailyGoal} VEs
            </span>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${progress}%` }} />
          </div>

          <p>
            {stats.dailyGoal - stats.todayEarnings} VEs left to hit your daily target.
          </p>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow} />

        <div className={styles.videoCard}>
          <div className={styles.videoTop} />

          <div className={styles.playButton}>
            <Play size={36} fill="white" />
          </div>

          <div className={styles.videoControls}>
            <span />
            <div />
          </div>
        </div>

        <div className={styles.coin}>VE</div>
        <div className={`${styles.coinSmall} ${styles.coinOne}`}>VE</div>
        <div className={`${styles.coinSmall} ${styles.coinTwo}`}>VE</div>
      </div>
    </section>
  );
};

export default HeroSection;