export const getByCountry = (state = { data: [], loading: true }, action) => {
  switch (action.type) {
    case "FETCH_BY_COUNTRY":
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
