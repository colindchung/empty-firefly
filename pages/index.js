import Link from "next/link";
import Button from '@material-ui/core/Button';

const Index = () => (
  <div className="app-container">
    <h1>DEV SITE</h1>

    <div className="body-container">
      <h2>TamperMonkey Scripts Test Pages</h2>
      <div className="category-container">
        <Link href="/tampermonkey/triple-click">
          <div className="link bouncy">Triple Click to Copy</div>
        </Link>
      </div>
    </div>
  </div>
);

export default Index;
