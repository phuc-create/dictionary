import { Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Input from "./components/Input";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
const App = () => {
  const [word, setWord] = useState("");
  const [lang, setLang] = useState("en_US");
  const [means, setMeans] = useState([]);
  const uri = `https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`;
  useEffect(() => {
    const fetchWord = () => {
      axios.get(uri).then((data) => setMeans(data.data));
    };
    fetchWord();
  }, [uri]);
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.root}>
        <Input setWord={setWord} setLang={setLang} lang={lang} />
        <Board means={means} />
      </Container>
    </Fragment>
  );
};

export default App;
