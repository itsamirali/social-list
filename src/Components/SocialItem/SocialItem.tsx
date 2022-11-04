import cx from "classnames";
import styles from "./SocialItem.module.css";
import { SocialType } from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SocialItem = ({ Icon, title, link }: SocialType) => {
  return (
    <div
      className={cx(
        styles.socilaContainer,
        "w-100",
        "d-flex",
        "align-items-center",
        "justify-content-between",
        "mb-4",
        "py-3",
        "px-3"
      )}
    >
      <div className="d-flex align-items-center justify-content-center">
        <Icon className={cx(styles.socialIcon)} />
        <h2 className={cx(styles.socialTitle, "mx-4")}>
          {title} <span>لینک :</span>
        </h2>
        <a className={cx(styles.socialLink)} href={link}>
          {link}
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          className={cx(
            styles.controllBtnStyle,
            styles.editBtnStyles,
            "d-flex",
            "align-items-center",
            "justify-cpntent-center",
            "py-2",
            "ms-3"
          )}
        >
          <EditIcon />
          <span>ویرایش</span>
        </button>
        <button
          className={cx(
            styles.controllBtnStyle,
            styles.delBtnStyles,
            "d-flex",
            "align-items-center",
            "justify-cpntent-center",
            "py-2"
          )}
        >
          <DeleteIcon />
          <span>حذف</span>
        </button>
      </div>
    </div>
  );
};

export default SocialItem;
