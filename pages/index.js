import Link from "next/link";
import Button from '@material-ui/core/Button';

const Index = () => (
  <div className="app-container">
    <h1>DEV SITE</h1>

    <div className="body-container">
      <h2>Data Structures</h2>
      <div className="category-container">
        <Link href="/ds/linked-list">
          <div className="link bouncy">Linked List</div>
        </Link>
        <Link href="/ds/stack-queue">
          <div className="link bouncy">Stack / Queue</div>
        </Link>
        <Link href="/ds/hashmap">
          <div className="link bouncy">HashMap</div>
        </Link>
      </div>

      <h2>Algorithms</h2>
      <div className="category-container">
        <Link href="/algorithms/searching">
          <div className="link bouncy">Searching</div>
        </Link>
        <Link href="/algorithms/sorting">
          <div className="link bouncy">Sorting</div>
        </Link>
        <Link href="/algorithms/traversal">
          <div className="link bouncy">Traversal</div>
        </Link>
      </div>

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
