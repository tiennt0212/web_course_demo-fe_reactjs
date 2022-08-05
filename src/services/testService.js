import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://movie-database-alternative.p.rapidapi.com/",
//   params: { s: "Avengers Endgame", r: "json", page: "1" },
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const getMovie = async () => {
  const res = await axios.get(
    "https://movie-database-alternative.p.rapidapi.com/",
    { params: { s: "Avengers Endgame", r: "json", page: "1" } }
  );
  return res.data;
};

export { getMovie };
