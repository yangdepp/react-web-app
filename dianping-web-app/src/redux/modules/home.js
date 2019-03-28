import { get } from '../../utils/request'
import url from '../../utils/url'

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
      dispatch(fetchLikesRequest());
      return get(url.getProductList(0, 10)).then(
        data => {
          dispatch(fetchLikesSuccess(data))
          //  dispatch(action)
        },
        error => {
          dispatch(fetchLikesFailure(error))
        }
      )
    }
  }
}

//  action-creators
const fetchLikesRequest = () => ({
  type: types.FETCH_LIKES_REQUEST
})

const fetchLikesSuccess = (data) => ({
  type: types.FETCH_LIKES_SUCCESS,
  data
})
const fetchLikesFailure = (error) => ({
  type: types.FETCH_LIKES_FAILURE,
  error
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