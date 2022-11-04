import cx from "classnames";
import styles from "./SocialList.module.css";
import AddIcon from "@mui/icons-material/Add";
import SocialItem from "../SocialItem/SocialItem";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import AddSocial from "../AddSocial/AddSocial";

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
          "my-4"
        )}
      >
        <AddIcon style={{ color: "rgb(255, 168, 46)", fontSize: "30px" }} />
        <span className="me-2">افزودن مسیر ارتباطی</span>
      </button>
      <div className="w-100 d-flex align-items-center justify-content-center px-3 mb-4">
        <AddSocial />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center px-3">
        <SocialItem
          Icon={TwitterIcon}
          link="https://google.com"
          title="توییتر"
        />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center px-3">
        <SocialItem
          Icon={InstagramIcon}
          link="https://google.com"
          title="اینستاگرام"
        />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center px-3">
        <SocialItem
          Icon={TelegramIcon}
          link="https://google.com"
          title="تلگرام"
        />
      </div>
    </div>
  );
};

export default SocialList;
