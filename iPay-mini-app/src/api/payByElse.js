import axios from 'axios'

export const getImageElse = () => {
    const url = `/api/GetBrands?type=n`;
    
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        console.log(err);
    });
}

export const getPriceElse = () => {
    const url = `/api/GetPrices?type=n`;
  
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        console.log(err);
    });
}