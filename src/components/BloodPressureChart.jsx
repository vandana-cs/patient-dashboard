import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function BloodPressureChart({ diagnosisHistory }) {
  const labels = diagnosisHistory.map(
    item => `${item.month} ${item.year}`
  )

  const systolicData = diagnosisHistory.map(
    item => item.blood_pressure.systolic.value
  )

  const diastolicData = diagnosisHistory.map(
    item => item.blood_pressure.diastolic.value
  )

  const data = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2'
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6'
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  )
}

export default BloodPressureChart