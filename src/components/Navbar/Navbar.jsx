import { Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoMark}>V</span>

          <div>
            <h2>VELOOP</h2>
            <span>REWARDS</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className={styles.navLinks}>

        </nav>

        {/* Right section */}
        <div className={styles.actions}>

          <div className={styles.balance}>
            <span className={styles.veIcon}>VE</span>
            <span className={styles.balanceText}>2,450 VEs</span>
            <ChevronDown size={16} />
          </div>

          <button className={styles.notification}>
            <Bell size={20} />
            <span className={styles.notificationDot}></span>
          </button>

          <div className={styles.profile}>
            SM
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;