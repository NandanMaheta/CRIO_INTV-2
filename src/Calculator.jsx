import { useState } from "react";
import Grid from "@mui/material/Grid";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const handleResult = () => {
    if (input) {
      setResult(eval(input));
    } else {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  }
  
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <h1>React Calculator</h1>
      </Grid>
      <Grid item>
        <input type="text" value={input} />
      </Grid>

      {result==="" ? null :(
        <Grid item>
          <div>{result}</div>
        </Grid>
      )}
      <Grid item>
        <div>
          <button style={buttonStyle} onClick={() => setInput(input + "7")}>
            7
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "8")}>
            8
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "9")}>
            9
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "+")}>
            +
          </button>
        </div>
      </Grid>
      <Grid item>
        <div>
          <button style={buttonStyle} onClick={() => setInput(input + "4")}>
            4
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "5")}>
            5
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "6")}>
            6
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "-")}>
            -
          </button>
        </div>
      </Grid>
      <Grid item>
        <div>
          <button style={buttonStyle} onClick={() => setInput(input + "1")}>
            1
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "2")}>
            2
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "3")}>
            3
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "*")}>
            *
          </button>
        </div>
      </Grid>
      <Grid item>
        <div>
          <button style={buttonStyle} onClick={() => handleClear()}>
            C
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "0")}>
            0
          </button>
          <button style={buttonStyle} onClick={() => handleResult()}>
            =
          </button>
          <button style={buttonStyle} onClick={() => setInput(input + "/")}>
            /
          </button>
        </div>
      </Grid>
    </Grid>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  width: "50px",
  height: "50px",
};
