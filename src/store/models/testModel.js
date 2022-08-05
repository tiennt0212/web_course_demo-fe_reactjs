import { getMovie } from "../../services/testService";

export const testModel = {
  state: {
    movie: {},
  },
  reducers: {
    setMovie(state, payload) {
      return {
        ...state,
        movie: { ...payload },
      };
    },
  },
  effects: (dispatch) => ({
    async getMovie() {
      try {
        const data = getMovie();
        this.setMovie(data);
      } catch (error) {
        console.log(error);
      }
    },
  }),
};
