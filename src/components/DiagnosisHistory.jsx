import BloodPressureChart from './BloodPressureChart'

function DiagnosisHistory({ patient }) {
  return (
    <div className="card">
      <h2>Diagnosis History</h2>

      <BloodPressureChart
        diagnosisHistory={patient.diagnosis_history}
      />

      <div className="health-stats">
        <div className="stat-card">
          <h3>Respiratory Rate</h3>
          <p>
            {
              patient.diagnosis_history[0]
              .respiratory_rate.value
            } bpm
          </p>
        </div>

        <div className="stat-card">
          <h3>Temperature</h3>
          <p>
            {
              patient.diagnosis_history[0]
              .temperature.value
            }°F
          </p>
        </div>

        <div className="stat-card">
          <h3>Heart Rate</h3>
          <p>
            {
              patient.diagnosis_history[0]
              .heart_rate.value
            } bpm
          </p>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory