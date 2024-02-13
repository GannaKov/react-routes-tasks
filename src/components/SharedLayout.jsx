import { Outlet, NavLink } from "react-router-dom";
import styles from "../styles/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.headerWrp}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={styles.navLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/students"
                className={styles.navLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/info"
                className={styles.navLink}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "green",
                })}
              >
                Info
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
