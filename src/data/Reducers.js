const initialState = {
  secretNum: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_SECRET_NUM":
      return { ...state, secretNum: payload };
    default:
      return state;
  }
};
