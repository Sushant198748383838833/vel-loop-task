import { ArrowDown, Banknote, CheckCircle2, PlayCircle } from "lucide-react";
import styles from "./RewardsInfo.module.css";

const steps = [
  { title: "Watch Advertisement", icon: <PlayCircle size={18} /> },
  { title: "Earn VEs", icon: <CheckCircle2 size={18} /> },
  { title: "Convert to Cash", icon: <Banknote size={18} /> },
  { title: "Withdraw to Bank", icon: <ArrowDown size={18} /> },
];

const RewardsInfo = () => {
  return (
    <section className={styles.rewardsInfo}>
      <div className={styles.header}>
        <div className={styles.headingWrap}>
          <span className={styles.kicker}>Reward Flow</span>
          <h3>How rewards move from ads to cash</h3>
        </div>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div className={styles.stepCard} key={step.title}>
            <div className={styles.iconWrap}>{step.icon}</div>
            <div className={styles.stepContent}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <p>{step.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RewardsInfo;