import cx from "classnames";
import styles from "./SocialList.module.css";
import AddIcon from "@mui/icons-material/Add";

const SocialList = () => {
  return (
    <div
      className={cx(
        styles.socialListContainerStyles,
        "d-flex",
        "flex-column",
        "align-items-start",
        "justify-content-start",
        "w-100",
        "mt-5",
        "p-3"
      )}
    >
      <span
        className={cx(
          styles.boxTitleStyle,
          "w-100",
          "d-flex",
          "align-items-center",
          "justify-content-start"
        )}
      >
        مسیرهای ارتباطی
      </span>
      <button
        className={cx(
          styles.addItemBtnStyle,
          "d-flex",
          "align-items-center",
          "justify-content-center",
          "px-3",
          "py-2",
          "mt-4"
        )}
      >
        <AddIcon style={{color: "rgb(255, 168, 46)", fontSize: "30px"}} />
        <span className="me-2">افزودن مسیر ارتباطی</span>
      </button>
    </div>
  );
};

export default SocialList;
