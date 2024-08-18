import axios from "axios";

// export const fetchPhotosBySearchValue = async (searchValue, pageNumber = 1) => {
//   const params = {
//     query: searchValue,
//     page: pageNumber,
//     orientation: "landscape",
//     per_page: 20,
//   };
//   const { data } = await axios.get(
//     "https://api.unsplash.com/search/photos?client_id=A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
//     {
//       params,
//       headers: {
//         "Accept-Version": "v1",
//       },
//     }
//   );
//   return data;
// };

export const fetchPhotosApi = async (searchValue, pageNumber = 1) => {
  const params = {
    query: searchValue,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  return data;
};

// axios.defaults.baseURL =
//   "https://api.unsplash.com/photos?client_id=ldWWfbIbG_uqkobA_9GRNedWj8VbtdNT7uUmYFtgTQ8";

// export const fetchPhotosApi = async () => {
//   const response = await axios.get();
//   return response.data;
// };
