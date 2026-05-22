function PatientProfile({ patient }) {
  return (
    <div className="card profile-card">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="profile-image"
      />

      <h2>{patient.name}</h2>

      <div className="profile-info">
        <p><strong>Date Of Birth:</strong> {patient.date_of_birth}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Phone:</strong> {patient.phone_number}</p>
        <p><strong>Emergency:</strong> {patient.emergency_contact}</p>
        <p><strong>Insurance:</strong> {patient.insurance_type}</p>
      </div>
    </div>
  )
}

export default PatientProfile