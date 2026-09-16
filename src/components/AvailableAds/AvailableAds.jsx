import { Clock3, Play, RefreshCw } from "lucide-react";
import styles from "./AvailableAds.module.css";

const ads = [
  {
    id: 1,
    title: "FinVerse Pro",
    description: "The future of smart finance management.",
    duration: "45 sec",
    reward: "+38 VEs",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    id: 2,
    title: "StrideX",
    description: "Step up your game with ultimate comfort.",
    duration: "30 sec",
    reward: "+25 VEs",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    id: 3,
    title: "Melody Beats",
    description: "Feel every beat. Anytime. Anywhere.",
    duration: "60 sec",
    reward: "+50 VEs",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    bonus: "Limited Time Bonus!",
  },
  {
    id: 4,
    title: "DriveEZ",
    description: "Book rides easier than ever before.",
    duration: "40 sec",
    reward: "+20 VEs",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800",
  },
  {
    id: 5,
    title: "SafeNet VPN",
    description: "Secure. Private. Lightning fast.",
    duration: "30 sec",
    reward: "+18 VEs",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
  },
  {
    id: 6,
    title: "ShopJoy",
    description: "Best deals. Big savings. Just for you.",
    duration: "25 sec",
    reward: "+15 VEs",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
  },
];

const AvailableAds = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h2>Available Ads</h2>
          <span className={styles.count}>6 Ads Available</span>
        </div>

        <div className={styles.refresh}>
          <span>Auto refresh in 00:45</span>
          <RefreshCw size={13} />
        </div>
      </div>

      <div className={styles.adsGrid}>
        {ads.map((ad) => (
          <article className={styles.adCard} key={ad.id}>
            <div className={styles.adContent}>
              <div className={styles.imageWrapper}>
                <img
                  src={ad.image}
                  alt={ad.title}
                  className={styles.image}
                />

                <span className={styles.sponsored}>
                  Sponsored
                </span>

                {ad.bonus && (
                  <span className={styles.bonus}>
                    {ad.bonus}
                  </span>
                )}
              </div>

              <div className={styles.details}>
                <h3>{ad.title}</h3>

                <p>{ad.description}</p>

                <div className={styles.meta}>
                  <span className={styles.duration}>
                    <Clock3 size={12} />
                    {ad.duration}
                  </span>

                  <span className={styles.reward}>
                    {ad.reward}
                  </span>
                </div>

                <div className={styles.available}>
                  <span></span>
                  Available
                </div>
              </div>
            </div>

            <button className={styles.watchButton}>
              <Play size={14} fill="currentColor" />
              Watch Advertisement
            </button>
          </article>
        ))}
      </div>

      <p className={styles.noMore}>
        No more ads? Check back later for new advertisements.
      </p>
    </section>
  );
};

export default AvailableAds;