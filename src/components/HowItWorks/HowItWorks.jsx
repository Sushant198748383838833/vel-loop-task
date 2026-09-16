import {
  PlayCircle,
  Coins,
  Wallet,
  ArrowRight,
} from "lucide-react";

import styles from "./HowItWorks.module.css";

const steps = [
  {
    id: 1,
    icon: <PlayCircle size={18} />,
    title: "Watch an Ad",
    description: "Choose an available ad and watch it completely.",
  },
  {
    id: 2,
    icon: <Coins size={18} />,
    title: "Earn Rewards",
    description: "Get coins or cash rewards after completing the ad.",
  },
  {
    id: 3,
    icon: <Wallet size={18} />,
    title: "Redeem",
    description: "Withdraw your balance once you reach the minimum.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>How It Works</h2>
          <p>Start earning in three simple steps</p>
        </div>
      </div>

      <div className={styles.card}>
        {steps.map((step, index) => (
          <div className={styles.stepWrapper} key={step.id}>
            <div className={styles.step}>
              <div className={styles.icon}>
                {step.icon}
              </div>

              <div className={styles.content}>
                <div className={styles.stepTitle}>
                  <span>0{step.id}</span>
                  <h3>{step.title}</h3>
                </div>

                <p>{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight
                className={styles.arrow}
                size={15}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;