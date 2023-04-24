import { useState } from "react";

import Modal from "../components/Modal.js";

export default function Reports(props) {
  const { reports } = props;

  const [modalReport, setModalReport] = useState({});
  const [showModal, setShowModal] = useState(false);

  const reportsEl = reports.map((report, index) => {
    const interviewDate = new Date(report.interviewDate);
    const interviewYear = interviewDate.getFullYear();
    const interviewMonth = interviewDate.getMonth() + 1;
    const interviewDay = interviewDate.getDate();

    return (
      <tr key={report.id} id={index}>
        <td>{report.companyName}</td>
        <td>{`${interviewDay}.${interviewMonth}.${interviewYear}`}</td>
        <td>{report.status}</td>
        <td>
          <button className="btn btn--view" onClick={renderModal}>
            View
          </button>
        </td>
      </tr>
    );
  });

  function renderModal(e) {
    const id = e.target.closest("tr").id;
    setModalReport(reports[id]);
    setShowModal(true);
  }

  function closeModal(e) {
    setShowModal(false);
  }

  return (
    <section className="reports">
      <div className="main__title">
        <h2>Reports</h2>
      </div>

      <div className="card">
        <div className="card__wrapper">
          <table border={1} className="reports__table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Interview Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{reportsEl}</tbody>
          </table>
        </div>
      </div>
      {showModal && <Modal report={modalReport} handleClose={closeModal} />}
    </section>
  );
}
