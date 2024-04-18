import axios from 'axios';

export async function postData(data) {
  const res = await axios.post('https://portfolio-js.b.goit.study/api/requests/', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}

export async function getData() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/reviews/';
  const url = BASE_URL + END_POINT;

  try {
    const response = await axios.get(url);
    return response.data;
  }
  catch (error) {
    throw new Error('Not found');
  }
}
