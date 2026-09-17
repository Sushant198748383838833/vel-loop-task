import { Clock3, Play, RefreshCw, CheckCircle2, LoaderCircle } from "lucide-react";
import styles from "./AvailableAds.module.css";

const AvailableAds = ({ ads, onWatchAd, lastReward }) => {
  const availableCount = ads.filter((ad) => ad.status !== "completed").length;
  const isAnyWatching = ads.some((ad) => ad.status === "watching");

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h2>Available Ads</h2>
          <span className={styles.count}>{availableCount} Ads Available</span>
        </div>

        <div className={styles.refresh}>
          <span>Auto refresh in 00:45</span>
          <RefreshCw size={13} />
        </div>
      </div>

      {isAnyWatching && (
        <div className={styles.loaderBanner}>
          <LoaderCircle className={styles.spinning} size={16} />
          Loading ad experience...
        </div>
      )}

      {lastReward && (
        <div className={styles.rewardSuccess}>
          <CheckCircle2 size={18} />
          Reward successfully earned! +{lastReward.reward} VEs from {lastReward.title}
        </div>
      )}

      {availableCount === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>✓</div>
          <h3>No Ads Available</h3>
          <p>All ads have been watched for today. Check back later for new rewards.</p>
        </div>
      ) : (
        <div className={styles.adsGrid}>
          {ads.map((ad) => {
            const isCompleted = ad.status === "completed";
            const isWatching = ad.status === "watching";

            return (
              <article className={styles.adCard} key={ad.id}>
                <div className={styles.adContent}>
                  <div className={`${styles.imageWrapper} ${styles[ad.tone]}`}>
                    <div className={styles.logoBadge}>{ad.icon}</div>
                    <span className={styles.category}>{ad.category}</span>
                    {ad.reward >= 40 && <span className={styles.bonus}>Bonus</span>}
                  </div>

                  <div className={styles.details}>
                    <div className={styles.titleRow}>
                      <h3>{ad.title}</h3>
                      {!isCompleted && (
                        <span className={styles.statusPill}>Available</span>
                      )}
                    </div>

                    <p>{ad.description}</p>

                    <div className={styles.meta}>
                      <span className={styles.duration}>
                        <Clock3 size={12} />
                        {ad.duration} sec
                      </span>

                      <span className={styles.reward}>+{ad.reward} VEs</span>
                    </div>

                    <div className={styles.stateRow}>
                      <span className={`${styles.statusDot} ${isCompleted ? styles.completedDot : ""}`} />
                      {isCompleted ? "Completed" : "Available now"}
                    </div>
                  </div>
                </div>

                <button
                  className={`${styles.watchButton} ${isCompleted ? styles.completedButton : ""} ${isWatching ? styles.loadingButton : ""}`}
                  onClick={() => onWatchAd(ad.id)}
                  disabled={isCompleted || isWatching}
                >
                  {isWatching ? (
                    <>
                      <LoaderCircle className={styles.spinning} size={14} />
                      Watching...
                    </>
                  ) : isCompleted ? (
                    <>
                      <CheckCircle2 size={14} />
                      Reward Claimed
                    </>
                  ) : (
                    <>
                      <Play size={14} fill="currentColor" />
                      Watch Advertisement
                    </>
                  )}
                </button>
              </article>
            );
          })}
        </div>
      )}

      <p className={styles.noMore}>No more ads? Check back later for new advertisements.</p>
    </section>
  );
};

export default AvailableAds;