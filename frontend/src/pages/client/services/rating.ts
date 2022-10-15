import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import axios from 'axios';

export const ratingPostService = async (rating: Rating) => {
  try {
    const { data, status } = await axios.post(`${API_URL}/ratings`, rating, CONFIG_TOKEN);

    if (status === 201) {
      return data;
    }
  } catch (error) {
    if (typeof error === 'string') {
      error.toUpperCase(); // works, e narrowed to string
    } else if (error instanceof Error) {
      error.message; // works, e narrowed to Error
    }
  }
};
