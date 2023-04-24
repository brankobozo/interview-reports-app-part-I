import Card from "../components/Card.js";
import Spinner from "../components/Spinner.js";
import Error from "../components/Error.js";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();
  const [candidates, setCandidates] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then(res => res.json())
      .then(data => {
        setIsLoaded(true);
        setCandidates(data);
        setFilteredResults(data);
      })
      .catch(e => {
        setIsLoaded(true);
        setError(
          `Error occured in fetching data. Please check your connection!`
        );
      });
  }, []);

  function searchItems(e) {
    const query = e.target.value;
    setSearchInput(query);

    let filteredCandidates = filteredResults.filter(d => {
      let searchValue = d.name.toLowerCase();
      return searchValue.indexOf(e.target.value) !== -1;
    });

    setCandidates(filteredCandidates);
  }

  const cards = candidates.map(card => {
    return <Card card={card} key={card.id} />;
  });

  return (
    <div className="container">
      <div className="main__title">
        <h2>Candidates</h2>
        <input
          type="search"
          placeholder="Filter by name"
          value={searchInput}
          onChange={searchItems}
        />
      </div>
      {!isLoaded && <Spinner />}
      {isLoaded && cards.length === 0 && <Error error={error} />}
      {isLoaded && cards && <div className="cards">{cards}</div>}
    </div>
  );
}
