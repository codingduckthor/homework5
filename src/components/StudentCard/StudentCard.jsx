import styles from "../StudentCard/StudentCard.module.css";
import profileIcon from "../../assets/icons/profile.svg";

function StudentCard({ name }) {
  return (
    <div className={styles.card}>
      <img src={profileIcon} alt="avatar" className={styles.avatar} />
      <span className={styles.name}>{name}</span>
      <div className={styles.field}></div>
      <div className={styles.field}></div>
      <div className={styles.field}></div>
      <div className={styles.bigField}></div>
    </div>
  );
}

export default StudentCard;
