import axios from 'axios';

const xformHeader = { 'Content-Type': 'application/x-www-form-urlencoded' };
// const jsonHeader = {'Content-Type':'application/json'}

interface props {
  method: string,
  uri: string,
  route: string,
  headers: object,
  params: string,
}

export const ApiRequest = async ({
  method,
  uri,
  route,
  headers,
  params
}:props) => {
    
  if (headers === xformHeader) {
    const paramsL = new URLSearchParams(Object.entries(params)).toString();
    params = paramsL;
  }

  const config = JSON.stringify({
    method: method,
    url: uri + route,
    headers: headers,
    data: params
  });

  return axios(config);
};
