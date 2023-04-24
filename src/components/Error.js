export default function Error(props) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__content">
          <p>
            <span className="card__content--title">{props.error}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
