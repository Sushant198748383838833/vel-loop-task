import {
  Wallet,
  TrendingUp,
  Gift,
  ArrowRight,
} from "lucide-react";

import styles from "./YourRewards.module.css";

const YourRewards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Your Rewards</h2>
          <p>Track your earnings and available balance</p>
        </div>

        <button className={styles.historyButton}>
          Reward History
          <ArrowRight size={12} />
        </button>
      </div>

      <div className={styles.grid}>
        <div className={styles.balanceCard}>
          <div className={styles.cardTop}>
            <div className={styles.icon}>
              <Wallet size={17} />
            </div>

            <span>Available Balance</span>
          </div>

          <strong>₹248.50</strong>

          <p>Ready to redeem</p>

          <button className={styles.redeem}>
            Redeem Rewards
          </button>
        </div>

        <div className={styles.smallCard}>
          <div className={styles.smallIcon}>
            <TrendingUp size={17} />
          </div>

          <span>Total Earned</span>

          <strong>₹1,248.50</strong>

          <p>All time earnings</p>
        </div>

        <div className={styles.smallCard}>
          <div className={styles.smallIcon}>
            <Gift size={17} />
          </div>

          <span>Bonus Earned</span>

          <strong>₹125.00</strong>

          <p>From streaks & bonuses</p>
        </div>
      </div>
    </section>
  );
};

export default YourRewards;