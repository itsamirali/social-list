import { TextField } from "@material-ui/core";
import cx from "classnames";
import SearchableDropDown from "../SearchableDropDown/SearchableDropDown";
import styles from "./AddSocial.module.css";

const AddSocial = () => {
  return (
    <div
      className={cx(
        styles.addSocialContainer,
        "d-flex",
        "flex-column",
        "align-items-center",
        "justify-content-center",
        "w-100",
        "px-3",
        "py-4"
      )}
    >
      <div className="w-100 d-flex align-items-center justify-content-start mb-3">
        <h2 className={cx(styles.addSocialTitle)}>افزودن مسیر ارتباطی</h2>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-start">
        <SearchableDropDown />
        <TextField className={cx(styles.linkInput, "flex-fill")} id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
};

export default AddSocial;
