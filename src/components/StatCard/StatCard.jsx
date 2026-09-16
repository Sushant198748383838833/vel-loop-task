import styles from "./StatCard.module.css";

const StatCard = ({
  icon,
  title,
  value,
  suffix,
  subtitle,
  type = "default",
}) => {
  return (
    <article className={`${styles.statCard} ${styles[type]}`}>
      <div className={styles.icon}>
        {icon}
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <p className={styles.value}>
          {value}
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </p>

        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
      </div>
    </article>
  );
};

export default StatCard;