import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "rtl",
    "& .MuiInputLabel-outlined:.MuiInputLabel-shrink": {
      color: "rgb(255, 168, 46)",
    },
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "rgb(255, 168, 46)",
    },
  },
  inputRoot: {
    color: "rgb(255, 168, 46)",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      paddingLeft: 26,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff33",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(255, 168, 46)",
    },
  },
}));

export default function SearchableDropDown() {
  const classes = useStyles();
  return (
    <Autocomplete
      classes={classes}
      disablePortal
      id="combo-box-demo"
      options={socials}
      sx={{ width: 300, outlineColor: "#fff" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={
            <span style={{ fontFamily: "iransansR", color: "#fff" }}>نوع</span>
          }
        />
      )}
    />
  );
}
const socials = [
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <TwitterIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          توییتر
        </span>
      </div>
    ),
    value: "twitter",
  },
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <InstagramIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          اینستاگرام
        </span>
      </div>
    ),
    value: "instagram",
  },
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <FacebookIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          فیسبوک
        </span>
      </div>
    ),
    value: "facebook",
  },
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <TelegramIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          تلگرام
        </span>
      </div>
    ),
    value: "telegram",
  },
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <LinkedInIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          لینکدین
        </span>
      </div>
    ),
    value: "linkedin",
  },
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <TwitterIcon className="text-dark" />
        <span className="text-dark me-2" style={{ fontFamily: "iransansR" }}>
          وب سایت
        </span>
      </div>
    ),
    value: "website",
  },
];
