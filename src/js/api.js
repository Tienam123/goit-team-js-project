import axios from 'axios';

export async function postData(emailInput, commentsInput) {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api-docs/requests',
      {
        email: emailInput,
        comments: commentsInput,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getData() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/reviews/';
  const url = BASE_URL + END_POINT;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Not found');
  }
}
