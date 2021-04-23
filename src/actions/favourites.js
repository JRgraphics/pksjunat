import { GET_FAVOURITES, UPDATE_FAVOURITES } from "./types";

export const getFavourites = () => {
  const favouriteList = JSON.parse(localStorage.getItem("favourites"));
  return {
    type: GET_FAVOURITES,
    payload: favouriteList,
  };
};

export const updateFavourites = (name, id) => {
  let favouriteList = [];
  if (!!!localStorage.getItem("favourites")) {
    favouriteList = [{ name: name, id: id }];
  } else {
    favouriteList = JSON.parse(localStorage.getItem("favourites"));
    console.log(favouriteList.findIndex((item) => item.id === id));
    if (favouriteList.findIndex((item) => item.id === id) === -1) {
      favouriteList.push({ name: name, id: id });
    } else {
      favouriteList.splice(
        favouriteList.findIndex((item) => item.id === id),
        1
      );
    }
  }
  localStorage.setItem("favourites", JSON.stringify(favouriteList));
  return {
    type: UPDATE_FAVOURITES,
    payload: favouriteList,
  };
};
