import axios, { Method } from 'axios';

const base = '';

const xformHeader = {'Content-Type': 'application/x-www-form-urlencoded'}
const jsonHeader = {'Content-Type':'application/json'}

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
		let paramsL = new URLSearchParams(Object.entries(params)).toString();
		params = paramsL;
	}

	let config = JSON.stringify({
		method: method,
		url: uri + route,
		headers: headers,
		data: params
	});

	return axios(config);
}
