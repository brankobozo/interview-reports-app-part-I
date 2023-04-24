export default function CandidateInfo(props) {
  const { avatar, birthday, education, email, name } = props.about;

  const birth = new Date(birthday);
  const birthYear = birth.getFullYear();
  const birthMonth = birth.getMonth() + 1;
  const birthDay = birth.getDate();

  return (
    <section className="candidate">
      <div className="main__title">
        <h2>Candidate</h2>
      </div>
      <div className="card">
        <div className="card__wrapper card__wrapper--info ">
          <div className="card__header">
            <img src={avatar} alt={name} className="card__img" />
          </div>
          <div className="card__content">
            <p>
              <span className="card__content--title">Name: </span>
              {name}
            </p>
            <p>
              <span className="card__content--title">Email: </span>
              {email}
            </p>
            <p>
              <span className="card__content--title">Education: </span>
              {education}
            </p>
            <p>
              <span className="card__content--title">Date of birth: </span>{" "}
              {`${birthDay}.${birthMonth}.${birthYear}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
