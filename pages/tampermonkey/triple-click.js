import Link from "next/link";
import TextField from '@material-ui/core/TextField';

const TripleClick = () => (
  <div className="app-container">
    <h1>TRIPLE CLICK TO COPY</h1>
    <div style={{ width: '100%'}}>
      <h2>Triple click password to copy it to clipboard!</h2>
      <p>Meeting ID: www.someurl.zoom.com</p>
      <p>Password: A7hj0129Pn!</p>
    </div>
    <div style={{ width: '100%', paddingTop: '2em'}}>
      <TextField 
        variant="outlined"
        label="Try pasting here!" 
        placeholder="Password"
      />
    </div>
  </div>
);

export default TripleClick;
