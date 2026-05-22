function LabResults({ patient }) {
  return (
    <div className="card">
      <h2>Lab Results</h2>

      <ul className="lab-list">
        {patient.lab_results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

export default LabResults