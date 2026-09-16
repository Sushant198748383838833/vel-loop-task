import {
  Wallet,
  Coins,
  PlayCircle,
  CalendarDays,
} from "lucide-react";

import StatCard from "../StatCard/StatCard";
import styles from "./StatsSection.module.css";
import { watchAdsStats } from "../../data/watchAdsData";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Wallet size={20} />,
      title: "Today's Earnings",
      value: watchAdsStats.todayEarnings,
      suffix: "VEs",
      subtitle: "↑ 12% vs yesterday",
      type: "green",
    },
    {
      id: 2,
      icon: <Coins size={20} />,
      title: "Lifetime Earnings",
      value: watchAdsStats.lifetimeEarnings.toLocaleString(),
      suffix: "VEs",
      subtitle: "All time",
      type: "gold",
    },
    {
      id: 3,
      icon: <PlayCircle size={20} />,
      title: "Ads Watched Today",
      value: watchAdsStats.adsWatchedToday,
      suffix: "",
      subtitle: "↑ 2 vs yesterday",
      type: "purple",
    },
    {
      id: 4,
      icon: <CalendarDays size={20} />,
      title: "Remaining Ads",
      value: watchAdsStats.availableAds,
      suffix: "",
      subtitle: "Start watching now!",
      type: "blue",
    },
  ];

  return (
    <section className={styles.statsSection}>
      {stats?.map((stat) => (
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
// import RewardsInfo from "../RewardsInfo/RewardsInfo";
// import { watchAdsStats } from "../../data/watchAdsData";
