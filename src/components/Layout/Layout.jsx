import Aside from "../Aside/Aside.jsx";
import Main from "../Main/Main.jsx";
import styles from "../Layout/Layout.module.css";

function Layout() {
  return (
    <div className={styles.container}>
      <Aside />
      <Main />
    </div>
  );
}

export default Layout;
