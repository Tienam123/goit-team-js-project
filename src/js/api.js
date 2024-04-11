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

async function getData() {}
