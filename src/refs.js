export default function getRefs() {
  return {
    input: document.querySelector('#search-box'),
    countryInfoEl: document.querySelector('.country-info'),
    countryList: document.querySelector('.country-list'),
  };
}
