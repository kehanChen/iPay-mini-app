//下单
import axios from "axios/index";

export const doReload = (data) => {
  const url = `/api/DoReload`;
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data);
  }).catch((err) => {
    console.log(err);
  });
}
