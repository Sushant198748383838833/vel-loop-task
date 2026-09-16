import AvailableAds from "../../components/AvailableAds/AvailableAds";
import DailyStreak from "../../components/DailyStreak/DailyStreak";
import HeroSection from "../../components/HeroSection/HeroSection";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RecentEarnings from "../../components/RecentEarnings/RecentEarnings";
import RewardsInfo from "../../components/RewardsInfo/RewardsInfo";
import StatsSection from "../../components/StatsSection/StatsSection"
import YourRewards from "../../components/YourRewards/YourRewards";
import styles from "./WatchAds.module.css";

const WatchAds = () => {
  return (
    <main  className={styles.page}>
      
      <HeroSection />

      <StatsSection />

      <RewardsInfo />

      <AvailableAds />

      <DailyStreak />

       <RecentEarnings />

      <YourRewards />

      <HowItWorks />
    </main>
  );
};

export default WatchAds;