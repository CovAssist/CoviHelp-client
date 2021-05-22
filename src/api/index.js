import axios from 'axios';
const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

export const getVacantBeds = async () => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/api/beds/list?start=0&end=4&verified=true&status=true`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
