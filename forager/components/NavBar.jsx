"use client"
import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css';
import { usePathname } from 'next/navigation'; // Import this hook

export default function NavBar() {
  const pathname = usePathname(); // Get current route path
  
  return (
    <div className={styles.navbar}>
      <Link href="/mushroom" passHref>
        <div className={`${styles.navItem} ${pathname === '/mushroom' ? styles.active : ''}`}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={`${styles.navItem} ${pathname === '/dashboard' ? styles.active : ''}`}>
          <FaHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={`${styles.navItem} ${pathname === '/photosearch' ? styles.active : ''}`}>
          <FaSearch />
        </div>
      </Link>
    </div>
  );
}