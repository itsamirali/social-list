import styles from "./Header.module.css";
import cx from "classnames";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <div
      className={cx(
        styles.headerContainerStyle,
        "d-flex",
        "align-items-center",
        "justify-content-between",
        "mt-5"
      )}
    >
      <h2 className={cx(styles.headerTitleStyle, "text-light")}>
        تنظیمات کاربری
      </h2>
      <div className="d-flex align-items-center justify-content-center">
        {/* <WbSunnyIcon className={cx(styles.iconStyle)} /> */}
        <button
          className={cx(
            styles.headerBtnStyle,
            "py-3",
            "d-flex",
            "align-items-center",
            "justify-content-center"
          )}
        >
          ENGLISH
        </button>
        <button
          className={cx(
            styles.headerBtnStyle,
            styles.headerSelectedBtnStyle,
            "py-3",
            "d-flex",
            "align-items-center",
            "justify-content-center",
            "ms-4",
            "me-2"
          )}
        >
          فارسی
        </button>
        <DarkModeIcon className={cx(styles.iconStyle)} />
      </div>
    </div>
  );
};

export default Header;
