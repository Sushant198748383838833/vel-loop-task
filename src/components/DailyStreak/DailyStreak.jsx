import { Flame, Check, Gift } from "lucide-react";
import styles from "./DailyStreak.module.css";

const streakDays = [
  { day: "Mon", date: "1", completed: true },
  { day: "Tue", date: "2", completed: true },
  { day: "Wed", date: "3", completed: true },
  { day: "Thu", date: "4", completed: true },
  { day: "Fri", date: "5", completed: true },
  { day: "Sat", date: "6", completed: false },
  { day: "Sun", date: "7", completed: false },
];

const DailyStreak = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>
            <Flame size={17} />
          </div>

          <div>
            <h2>Daily Streak</h2>
            <p>Keep watching ads every day to maintain your streak</p>
          </div>
        </div>

        <div className={styles.streakCount}>
          <Flame size={13} />
          <span>5 Days</span>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.days}>
          {streakDays.map((item) => (
            <div
              key={item.day}
              className={`${styles.day} ${
                item.completed ? styles.completed : ""
              }`}
            >
              <span className={styles.dayName}>{item.day}</span>

              <div className={styles.dateCircle}>
                {item.completed ? <Check size={14} /> : item.date}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reward}>
          <div className={styles.rewardIcon}>
            <Gift size={17} />
          </div>

          <div className={styles.rewardText}>
            <strong>Next reward</strong>
            <span>Complete 2 more days to earn ₹25 bonus</span>
          </div>

          <button className={styles.watchButton}>
            Watch Ads
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyStreak;