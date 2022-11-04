import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function SearchableDropDown() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={socials}
      sx={{ width: 300, outlineColor: "#fff" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={<span style={{ fontFamily: "iransansR" }}>نوع</span>}
        />
      )}
    />
  );
}
const socials = [
  {
    label: (
      <div className="d-flex align-items-center justify-content-start">
        <TwitterIcon />
        <span style={{ fontFamily: "iransansR" }}>توییتر</span>
      </div>
    ),
    vlue: "twitter",
  },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];
