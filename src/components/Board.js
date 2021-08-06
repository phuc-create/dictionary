import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  pharaph: {
    fontSize: 18,
    margin: "5px 0px",
  },
});

const Board = ({ means }) => {
  const classes = useStyles();
  return (
    <div className="show-information-of-code">
      {means &&
        means.map((m, i) => (
          <div>
            {/* <div className="col-to-in" key={i}>
              Your word: {m.word}
              {m.meanings &&
                m.meanings.map((mean) => (
                  <div className="mean-col-in">
                    <div>
                      {mean.definitions &&
                        mean.definitions.map((def) => (
                          <Fragment>
                            <div className="def-col-in">
                              Definition: {def.definition}
                            </div>
                            <div className="def-col-in">
                              Example: {def.example}
                            </div>
                            <div className="def-col-in">
                              {def.synonyms &&
                                def.synonyms.map((s) => (
                                  <div className="syn">Synonyms: {s}</div>
                                ))}
                            </div>
                          </Fragment>
                        ))}
                    </div>
                    {mean.partOfSpeech}
                  </div>
                ))}
            </div> */}

            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Your word:
                </Typography>
                <Typography variant="h4" component="h2">
                  {m.word}
                </Typography>
                {m.meanings &&
                  m.meanings.map((mean, i) => (
                    <div
                      key={i}
                      style={{
                        marginBottom: "20px",
                        borderBottom: "1px solid rgba(0,0,0,0.3)",
                        padding: "0px 0px 10px 0px",
                      }}
                    >
                      {/* <Typography variant="h5" component="h2">
                        {mean.partOfSpeech}
                      </Typography> */}
                      <Typography className={classes.pos} color="textSecondary">
                        Word type: {mean.partOfSpeech}
                      </Typography>
                      {mean.definitions &&
                        mean.definitions.map((def, i) => (
                          <div key={i} style={{ lineHeight: "30px" }}>
                            Definition:
                            <Typography
                              variant="body2"
                              component="p"
                              className={classes.pharaph}
                            >
                              {def.definition} ,
                            </Typography>
                            <Typography
                              variant="body2"
                              component="p"
                              className={classes.pharaph}
                            >
                              Definition: {def.example}
                            </Typography>
                            Synonyms:
                            {def.synonyms &&
                              def.synonyms.map((s, i) => (
                                <div key={i}>+ {s}</div>
                              ))}
                          </div>
                        ))}
                    </div>
                  ))}

                {/* <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography> */}
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        ))}
    </div>
  );
};
export default Board;
