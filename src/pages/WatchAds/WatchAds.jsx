import { useMemo, useState } from "react";

import AvailableAds from "../../components/AvailableAds/AvailableAds";
import DailyStreak from "../../components/DailyStreak/DailyStreak";
import HeroSection from "../../components/HeroSection/HeroSection";
import RecentEarnings from "../../components/RecentEarnings/RecentEarnings";
import RewardsInfo from "../../components/RewardsInfo/RewardsInfo";
import StatsSection from "../../components/StatsSection/StatsSection";
import YourRewards from "../../components/YourRewards/YourRewards";
import { watchAdsList, watchAdsStats } from "../../data/watchAdsData";
import styles from "./WatchAds.module.css";

const WatchAds = () => {
  const [ads, setAds] = useState(watchAdsList);
  const [stats, setStats] = useState(watchAdsStats);
  const [lastReward, setLastReward] = useState(null);

  const summaryStats = useMemo(
    () => [
      {
        id: 1,
        title: "Today's Earnings",
        value: stats.todayEarnings,
        suffix: "VEs",
        subtitle: "↑ 12% vs yesterday",
        type: "green",
      },
      {
        id: 2,
        title: "Lifetime Earnings",
        value: stats.lifetimeEarnings.toLocaleString(),
        suffix: "VEs",
        subtitle: "All time",
        type: "gold",
      },
      {
        id: 3,
        title: "Ads Watched Today",
        value: stats.adsWatchedToday,
        suffix: "",
        subtitle: "↑ 2 vs yesterday",
        type: "purple",
      },
      {
        id: 4,
        title: "Remaining Ads",
        value: stats.availableAds,
        suffix: "",
        subtitle: "Start watching now!",
        type: "blue",
      },
    ],
    [stats]
  );

  const handleWatchAd = (adId) => {
    const ad = ads.find((item) => item.id === adId);

    if (!ad || ad.status === "watching" || ad.status === "completed") {
      return;
    }

    setLastReward({ id: ad.id, title: ad.title, reward: ad.reward });
    setAds((currentAds) =>
      currentAds.map((item) =>
        item.id === adId ? { ...item, status: "watching" } : item
      )
    );

    window.setTimeout(() => {
      setAds((currentAds) =>
        currentAds.map((item) =>
          item.id === adId ? { ...item, status: "completed" } : item
        )
      );

      setStats((currentStats) => ({
        ...currentStats,
        todayEarnings: currentStats.todayEarnings + ad.reward,
        lifetimeEarnings: currentStats.lifetimeEarnings + ad.reward,
        adsWatchedToday: currentStats.adsWatchedToday + 1,
        totalVEsEarned: currentStats.totalVEsEarned + ad.reward,
        availableAds: Math.max(currentStats.availableAds - 1, 0),
        completedAds: currentStats.completedAds + 1,
      }));
    }, 1600);
  };

  return (
    <main className={styles.page}>
      <HeroSection stats={stats} ads={ads} />

      <StatsSection stats={summaryStats} />

      <RewardsInfo />

      <AvailableAds
        ads={ads}
        onWatchAd={handleWatchAd}
        lastReward={lastReward}
      />

      <DailyStreak />

      <RecentEarnings />

      <YourRewards />
    </main>
  );
};

export default WatchAds;