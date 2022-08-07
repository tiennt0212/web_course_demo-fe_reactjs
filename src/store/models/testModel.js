import { TestService } from "../../services";

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
        const data = await TestService.getMovie();
        this.setMovie(data);
      } catch (error) {
        console.log(error);
      }
    },
  }),
};
