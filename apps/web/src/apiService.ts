import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function getUserById(id: number) {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`)
    return response.data
  }
  catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
