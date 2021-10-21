export const getSummary = (state = { data: [], loading: true }, action) => {
  switch (action.type) {
    case "FETCH_ALL_COUNTRY":
      return {
        loading: false,
        data: action.payload,

        error: "",
      };

    case "FETCH_ERROR":
      return {
        error: "",
        data: [],
      };
    default:
      return state;
  }
};
