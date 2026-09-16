import { ShieldCheck } from "lucide-react";
import styles from "./RewardsInfo.module.css";

const RewardsInfo = () => {
  return (
    <section className={styles.rewardsInfo}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <ShieldCheck size={24} />
        </div>

        <div className={styles.content}>
          <h3>Your VEs. Your Rewards.</h3>

          <p>
            Earn VEs by watching ads. Convert them into real cash and withdraw
            to your linked bank account once you meet the minimum withdrawal
            conditions.
          </p>
        </div>
      </div>

      <button className={styles.learnMore}>
        Learn More
      </button>
    </section>
  );
};

export default RewardsInfo;