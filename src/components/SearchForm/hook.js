import { useReducer } from "react"

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
  RESET_FORM: "reset_form",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      }
    case ACTIONS.RESET_FORM:
      return {
        ...state,
        keyword: "",
        rating: "g",
      }
    default:
      return state
  }
}

export default function useForm({
  initialKeyword = "",
  initialRating = "g",
} = {}) {
  const initialState = {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const { keyword, rating, times } = state

  return {
    keyword,
    rating,
    times,
    updateKeyword: (keyword) =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    updateForm: () => dispatch({ type: ACTIONS.RESET_FORM }),
  }
}
