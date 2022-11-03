import styles from "./Header.module.css";
import cx from "classnames";

const Header = () => {
  return (
    <div
      className={cx(
        styles.headerContainerStyle,
        "d-flex",
        "align-items-center",
        "justify-content-between"
      )}
    >
      <h2 className={cx(styles.headerTitleStyle, "text-light")}>تنظیمات کاربری</h2>
      <div className="d-flex align-items-center justify-content-center">
        
      </div>
    </div>
  );
};

export default Header;
