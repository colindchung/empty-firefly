import Link from "next/link";
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function TripleClick(){

  const [val, setVal] = useState("");

  return (
    <div className="app-container">
      <h1>TRIPLE CLICK TO COPY</h1>
      <div style={{ width: '100%'}}>
        <h2>Triple click password to copy it to clipboard!</h2>
        <p>Meeting ID: www.someurl.zoom.com</p>
        <p>Password: A7hj0129Pn!</p>
      </div>
      <div className="trpclk-input-container">
        <TextField 
          variant="outlined"
          label="Try pasting here!" 
          placeholder="Password"
          value={val}
          onChange={e => setVal(e && e.target ? e.target.value : "")}
        />

        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setVal("")}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}


export default TripleClick;
