import axios from 'axios'
// 获得banner图
export const getAd = () => {
    const url = `/api/GetAD`;

    return axios.get(url).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        console.log(err);
    });
}
// 获得banner下文字
export const getBroadcast = () => {
    const url = `/api/GetBroadcast`;

    return axios.get(url).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        console.log(err);
    });
}
//获得汇率
export const getRate = () => {
  const url = `/api/GetRate`;

  return axios.get(url).then((res) => {
      return Promise.resolve(res.data);
  }).catch((err) => {
      console.log(err);
  });
}
