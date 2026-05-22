import axios from 'axios'

const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev/'

export const fetchPatientData = async () => {
  try {
    const response = await axios.get(API_URL, {
      auth: {
        username: 'coalition',
        password: 'skills-test'
      }
    })

    return response.data
  } catch (error) {
    console.error('API Error:', error)
    return []
  }
}