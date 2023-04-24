import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { avatar, name, email } = card;

  return (
    <div className="card">
      <Link to="candidate" state={card} className="card__wrapper">
        <div className="card__header">
          <img src={avatar} alt={name} className="card__img" />
        </div>
        <div className="card__content">
          <h3>{name}</h3>
          <p>
            <span className="card__content--title">{email}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
