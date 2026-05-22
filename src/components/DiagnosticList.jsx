function DiagnosticList({ patient }) {
  return (
    <div className="card">
      <h2>Diagnostic List</h2>

      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patient.diagnostic_list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DiagnosticList