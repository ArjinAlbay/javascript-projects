let countries2 = document.getElementById("container2");

const BASE_URL = "https://countriesnow.space/api/v0.1/countries";

let getCountries = async () => {
  const response = await fetch(`${BASE_URL}`).then((response) =>
    response.json()
  );
  const { data } = response;

  data.forEach((country) => {
    console.log(country);
  });
};

getCountries();
