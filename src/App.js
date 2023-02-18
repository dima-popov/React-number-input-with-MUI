import logo from "./logo.svg";
import "./App.css";
import NumberInput from "./NumberInput/NumberInput.tsx";
import { useState } from "react";
import { Typography } from "@mui/material";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography sx={{ marginTop: "20px" }}>All numbers</Typography>
        <NumberInput
          data-testid="nmbinput"
          step={1}
          // precision={20}
          //length={10}
          value={value}
          // max={9999}
          // min={0}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          inputStyle={{ backgroundColor: "white" }}
          sx={{
            backgroundColor: "gray",
            borderRadius: "4px",
            ".MuiOutlinedInput-root": {
              overflow: "hidden",
            },
          }}
        />
        <Typography sx={{ marginTop: "20px" }}>
          Positive Integers only
        </Typography>
        <NumberInput
          data-testid="intinput"
          step={1}
          precision={0}
          length={10}
          value={value2}
          min={0}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
          inputStyle={{ backgroundColor: "white" }}
          sx={{
            backgroundColor: "gray",
            borderRadius: "4px",
            ".MuiOutlinedInput-root": {
              overflow: "hidden",
            },
          }}
        />
      </header>
    </div>
  );
}

export default App;
