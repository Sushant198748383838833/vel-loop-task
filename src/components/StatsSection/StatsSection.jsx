import {
  Wallet,
  Coins,
  PlayCircle,
  CalendarDays,
} from "lucide-react";

import StatCard from "../StatCard/StatCard";
import styles from "./StatsSection.module.css";

const StatsSection = ({ stats }) => {
  const statCards = stats.map((stat) => ({
    ...stat,
    icon:
      stat.title === "Today's Earnings" ? (
        <Wallet size={20} />
      ) : stat.title === "Lifetime Earnings" ? (
        <Coins size={20} />
      ) : stat.title === "Ads Watched Today" ? (
        <PlayCircle size={20} />
      ) : (
        <CalendarDays size={20} />
      ),
  }));

  return (
    <section className={styles.statsSection}>
      {statCards.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          suffix={stat.suffix}
          subtitle={stat.subtitle}
          type={stat.type}
        />
      ))}
    </section>
  );
};

export default StatsSection;

