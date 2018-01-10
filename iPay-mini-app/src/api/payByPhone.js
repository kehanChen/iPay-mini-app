import axios from 'axios'

export const getImagePhone = () => {
  const url = `/api/GetBrands?type=m`;

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    console.log(err);
  });
}

export const getPricePhone = () => {
  const url = `/api/GetPrices?type=m`;

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    console.log(err);
  });
}

