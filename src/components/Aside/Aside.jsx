import styles from "../Aside/Aside.module.css";
import profileIcon from "../../assets/icons/profile.svg";

function Aside() {
  const menu = [
    { icon: profileIcon, label: "somethingsomethig" },
    { icon: profileIcon, label: "somethingsomethig" },
    { icon: profileIcon, label: "somethingsomethig" },
    { icon: profileIcon, label: "somethingsomethig" },
    { icon: profileIcon, label: "somethingsomethig" },
  ];

  return (
    <aside className={styles.aside}>
      <div className={styles.logo}>LOGO</div>

      <nav className={styles.menu}>
        {menu.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <img src={item.icon} alt={item.label} className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </nav>

      <button className={styles.logout}>Выход</button>
    </aside>
  );
}

export default Aside;
