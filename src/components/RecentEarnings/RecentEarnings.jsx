import {
  ArrowUpRight,
  PlayCircle,
  Clock3,
} from "lucide-react";

import styles from "./RecentEarnings.module.css";

const earnings = [
  {
    id: 1,
    title: "FinVerse Pro",
    time: "2 mins ago",
    duration: "30 sec",
    amount: "+₹5.00",
  },
  {
    id: 2,
    title: "ShopEase",
    time: "18 mins ago",
    duration: "45 sec",
    amount: "+₹3.50",
  },
  {
    id: 3,
    title: "LearnHub",
    time: "42 mins ago",
    duration: "30 sec",
    amount: "+₹4.00",
  },
  {
    id: 4,
    title: "TravelGo",
    time: "1 hr ago",
    duration: "60 sec",
    amount: "+₹6.00",
  },
];

const RecentEarnings = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Recent Earnings</h2>
          <p>Your latest ad watching activity</p>
        </div>

        <button className={styles.viewAll}>
          View All
          <ArrowUpRight size={13} />
        </button>
      </div>

      <div className={styles.card}>
        {earnings.map((earning) => (
          <div className={styles.earning} key={earning.id}>
            <div className={styles.icon}>
              <PlayCircle size={17} />
            </div>

            <div className={styles.info}>
              <h3>{earning.title}</h3>

              <div className={styles.meta}>
                <span>{earning.time}</span>

                <span className={styles.duration}>
                  <Clock3 size={10} />
                  {earning.duration}
                </span>
              </div>
            </div>

            <span className={styles.amount}>
              {earning.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentEarnings;