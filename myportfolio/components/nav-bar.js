// components/nav-bar.js
import Link from "next/link";
import { useRouter } from "next/router";

// Import CSS
import styles from "../styles/NavBar.module.css";

// Navigation Bar
// This component will be used on all pages
const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.topNav}>
      <Link
        href="/"
        className={currentRoute === "/" ? styles.active : styles.nonActive}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={currentRoute === "/about" ? styles.active : styles.nonActive}
      >
        About
      </Link>

      <Link
        href="/contact"
        className={
          currentRoute === "/contact" ? styles.active : styles.nonActive
        }
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
