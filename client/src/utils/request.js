import axios from "axios";

export const getRandomJoke = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = response.data.joke;
    return joke;
  } catch (err) {
    throw new Error(err);
  }
};
