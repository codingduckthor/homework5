import StudentList from "../StudentList/StudentList";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.innerContainer}>
        <div className={styles.topBar}>
          <div className={styles.searchBar}></div>
          <div className={styles.topRight}>
            <img alt="Уведомления" className={styles.icon} />
            <img alt="Настройки" className={styles.icon} />
          </div>
        </div>

        <div className={styles.header}>
          <h2 className={styles.title}>Список студентов</h2>
          <button className={styles.addButton}>Добавить</button>
        </div>

        <StudentList />
      </div>
    </main>
  );
}

export default Main;
