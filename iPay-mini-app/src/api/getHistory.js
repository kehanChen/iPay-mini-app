import axios from 'axios'

export const getHistory = (id) => {
  const url = `/api/GetHistory?openid=${id}`;

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    console.log(err);
  });
}
