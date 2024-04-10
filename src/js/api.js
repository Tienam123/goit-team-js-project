import axios from 'axios';

function postData(emailInput, commentsInput) {
  axios
    .post('https://portfolio-js.b.goit.study/api-docs/requests', {
      email: emailInput,
      comments: commentsInput,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function getData() {}
