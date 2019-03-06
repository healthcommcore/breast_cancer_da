import axios from 'axios';

const track = (data) => {
  axios({
    method: 'post',
    url: data.api + '?req=track_user',
    data: data
  }).
    .then( (result) => {
      console.log('User activity tracked');
    })
    .catch( (error) => {
      console.log('Tracking error: ' + error);
    });
}

export { track };

