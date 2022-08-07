import API from "../utils/api";

const getNFTs = async () => {
  const res = await API.get("/nfts");
  return res.data;
};

export { getNFTs };
