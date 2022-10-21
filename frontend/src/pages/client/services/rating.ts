import { Rating } from '@/models/rating.type';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import axios from 'axios';

export const ratingPostService = async (rating: Rating) => {
  try {
    const { data, status } = await axios.post(`${API_URL}/rating`, rating, CONFIG_TOKEN);

    if (status === 200) {
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
