/* eslint-disable func-names */
import stockAPI from '../api/stockAPI';

// actions

const FETCH_COMPANY = 'FETCH_COMPANY';

export function fetchInfo(symbol) {
  return (dispatch) => stockAPI.getInfo(symbol).then((data) => {
    if (data) {
      dispatch({
        type: FETCH_COMPANY,
        company: data,
      });
    }
  });
}

const reducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_COMPANY:
      return action.company[0];

    default:
      return state;
  }
};

export default reducer;
