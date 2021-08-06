import { makeStyles, MenuItem, TextField, Select } from "@material-ui/core";
import React from "react";

const Input = ({ setWord, setLang, lang }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "100px 5px 30px 5px",
      "& > *": {
        margin: theme.spacing(1),
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        margin: "30px 0px 30px 0px",
      },
    },
  }));
  const langArr = [
    {
      id: "en_US",
      lang: "en_US",
      value: "English (US)",
    },
    {
      id: "es",
      lang: "es",
      value: "Spanish",
    },
    {
      id: "hi",
      lang: "hi",
      value: "Hindi",
    },
    {
      id: "fr",
      lang: "fr",
      value: "Franch",
    },
    {
      id: "ja",
      lang: "ja",
      value: "Japanese",
    },
    {
      id: "ru",
      lang: "ru",
      value: "Russian",
    },
    {
      id: "en_GB",
      lang: "en_GB",
      value: "English ̣(UK)",
    },
    {
      id: "de",
      lang: "de",
      value: "German",
    },

    {
      id: "it",
      lang: "it",
      value: "Italian",
    },

    {
      id: "ko",
      lang: "ko",
      value: "Korean",
    },
    {
      id: "pt-BR",
      lang: "pt-BR",
      value: "Brazilian Portuguese",
    },
    {
      id: "ar",
      lang: "ar",
      value: "Arabic",
    },
    {
      id: "tr",
      lang: "tr",
      value: "Turkish",
    },
  ];
  const classes = useStyles();
  return (
    <div className="form-setup-center">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Typing here..."
          variant="outlined"
          onChange={(e) => setWord(e.target.value)}
          fullWidth
        />
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          fullWidth
        >
          {langArr.map((l) => (
            <MenuItem key={l.id} value={l.lang}>
              {l.value}
            </MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </form>
    </div>
  );
};
export default Input;
