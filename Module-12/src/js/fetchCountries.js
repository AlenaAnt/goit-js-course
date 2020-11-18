const API_URL = 'https://restcountries.eu/rest/v2/';
export default function (searchQuery) {
  //debugger;
  return fetch(`${API_URL}name/${searchQuery}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      //console.log(data);
      return data;
    })
    .catch(error => {
      console.log('maim' + error);
      return error;
    });
}
