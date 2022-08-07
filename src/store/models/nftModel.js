import { NFTService } from "../../services";

export const nftModel = {
  state: {
    nfts: [],
    selectedNFT: {},
  },
  reducers: {
    setNFTs(state, payload) {
      return {
        ...state,
        nfts: [...payload],
      };
    },
    setSelectedNFT(state, payload) {
      return {
        ...state,
        selectedNFT: { ...payload },
      };
    },
  },
  effects: (dispatch) => ({
    async getNFTs() {
      try {
        const data = await NFTService.getNFTs();
        this.setNFTs(data);
      } catch (error) {
        console.log(error);
      }
    },
  }),
};
