import { get } from '../../utils/request'
import url from '../../utils/url'
import { FETCH_DATA } from '../middleware/api'
import { schema } from './entities/products'

export const types = {
  //  获取猜你喜欢
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
  //  获取猜你喜欢成功
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  //  获取猜你喜欢失败
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",
}

export const actions = {
  loadLikes: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(0, 10)
      return dispatch(fetchLikes(endpoint))
    }
  }
}

const fetchLikes = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE,
    ],
    endpoint,
    schema
  }
})

const reducer = (state = {}, action) => {
  switch (action.typ) {
    case types.FETCH_LIKES_REQUEST:
    //  todo
    case types.FETCH_LIKES_SUCCESS:
    // todo
    case types.FETCH_LIKES_FAILURE:
    // todo
    default:
      return state
  }
}
export default reducer;