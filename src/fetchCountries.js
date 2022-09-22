import Notiflix from 'notiflix';
const BASE__URL = 'https://restcountries.com/v3.1';

// Напиши функцию fetchCountries(name) которая делает HTTP-запрос на ресурс name
//  и возвращает промис с массивом стран - результатом запроса.
//  Вынеси её в отдельный файл fetchCountries.js

function fetchCountries(name) {
  return fetch(
    `${BASE__URL}/name/${name}?fields=name,capital,flags,population,languages`
  ).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      //   Notiflix.Notify.failure(`❌ "Oops, there is no country with that name"`);
      throw new Error(response.status);
    }
  });
}
export default { fetchCountries };
