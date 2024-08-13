import axios from "axios";

export const requestAllPhotos = async () => {
  const AccessKey = "ldWWfbIbG_uqkobA_9GRNedWj8VbtdNT7uUmYFtgTQ8";
  const url = `https://api.unsplash.com/photos?client_id=${AccessKey}`;

  const { data } = await axios.get(url);
  return data;
};
