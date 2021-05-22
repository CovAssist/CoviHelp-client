import axios from 'axios';
const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://covhelp.herokuapp.com' : 'http://localhost:5000';

export const getListData = async (city, util) => {
  try {
    let dat;
    if (city) {
      const { data } = await axios.get(
        `${baseUrl}/api/${util}/list?start=0&end=10&verified=true&status=true&${
          util === 'beds' ? 'hoscity' : 'city'
        }=${city}`
      );
      dat = data;
    } else {
      const { data } = await axios.get(
        `${baseUrl}/api/${util}/list?start=0&end=10&verified=true&status=true`
      );
      dat = data;
    }
    console.log(dat);
    return dat;
  } catch (error) {
    console.log(error);
    return;
  }
};
