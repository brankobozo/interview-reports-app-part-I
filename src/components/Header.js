import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <h1>
            Interviews <br />
            reports
          </h1>
          <Link to="/" className="btn btn--link">
            Candidates
          </Link>
        </div>
      </div>
    </header>
  );
}
