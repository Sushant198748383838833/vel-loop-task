import { Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/watch-ads" className={styles.logo}>
          <span className={styles.logoMark}>V</span>

          <div>
            <h2>VELOOP</h2>
            <span>REWARDS</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className={styles.navLinks}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/rewards"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Rewards
          </NavLink>

          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Wallet
          </NavLink>

          <NavLink
            to="/watch-ads"
            className={({ isActive }) =>
              isActive ? styles.active : ""
            }
          >
            Watch Ads
          </NavLink>
        </nav>

        {/* Right section */}
        <div className={styles.actions}>

          <div className={styles.balance}>
            <span className={styles.veIcon}>VE</span>
            <span>2,450 VEs</span>
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