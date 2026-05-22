import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const jessica = data.find(
            (p) => p.name === "Jessica Taylor"
          );
          setPatient(jessica);
        } else {
          setError("Invalid API response");
        }
      })
      .catch(() => setError("API failed to load"));
  }, []);

  if (error) return <h2 style={{ padding: 20 }}>{error}</h2>;
  if (!patient) return <h2 style={{ padding: 20 }}>Loading...</h2>;

  const chartData =
    patient?.diagnosis_history
      ?.slice(-6)
      .map((item) => ({
        name: `${item.month} ${item.year}`,
        systolic: item.blood_pressure?.systolic?.value ?? 0,
        diastolic: item.blood_pressure?.diastolic?.value ?? 0,
      })) || [];

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        padding: 20,
        fontFamily: "Arial",
        background: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: "30%",
          background: "white",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <h2>Patients Dashboard</h2>

        <h3>{patient.name}</h3>
        <p>DOB: {patient.date_of_birth}</p>
        <p>Gender: {patient.gender}</p>
        <p>Phone: {patient.phone_number}</p>
        <p>Insurance: {patient.insurance_type}</p>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ width: "70%" }}>
        {/* DIAGNOSIS + CHART */}
        <div
          style={{
            background: "white",
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <h3>Diagnosis History</h3>

          <h4>Blood Pressure</h4>

          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="red"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="blue"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DIAGNOSTIC LIST */}
        <div
          style={{
            background: "white",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <h3>Diagnostic List</h3>

          <table border="1" cellPadding="8" width="100%">
            <thead>
              <tr>
                <th>Problem</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {patient.diagnostic_list?.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LAB RESULTS */}
        <div style={{ marginTop: 20 }}>
          <h3>Lab Results</h3>
          <ul>
            {patient.lab_results?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}