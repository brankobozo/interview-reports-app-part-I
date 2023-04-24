import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import CandidateInfo from "../components/CandidateInfo.js";
import CandidatReports from "../components/CandidatReports.js";
import Spinner from "../components/Spinner.js";
import Error from "../components/Error.js";

export default function Candidate() {
  const candidateAbout = useLocation().state;
  const [isLoaded, setIsLoaded] = useState(true);

  const [error, setError] = useState(null);

  const [candidateReports, setCandidateReports] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/api/reports?candidateId=${candidateAbout.id}`)
      .then(res => res.json())
      .then(reports => {
        setIsLoaded(true);
        setCandidateReports(reports);
      })
      .catch(e => {
        setIsLoaded(true);
        setError(
          `Error occured in fetching data. Please check your connection!`
        );
      });
  }, []);
  return (
    <div className="container">
      {!isLoaded && <Spinner />}
      {isLoaded && <CandidateInfo about={candidateAbout} />}
      {isLoaded && <CandidatReports reports={candidateReports} />}
    </div>
  );
}
