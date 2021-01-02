import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UPDATE_NAVIGATION_OPEN = 'UPDATE_NAVIGATION_OPEN'
const UPDATE_SEARCH_OPEN = 'UPDATE_SEARCH_OPEN'
const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM'

const initialState = {
  navigationOpen: false,
  searchOpen: false,
  searchTerm: ''
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAVIGATION_OPEN:
      return {
        ...state,
        ...initialState,
        navigationOpen: !state.navigationOpen
      }
    case UPDATE_SEARCH_OPEN:
      return {
        ...state,
        ...initialState,
        searchOpen: !state.searchOpen
      }
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}

const useSearchOpen = () => useSelector(
  ({header}) => header.searchOpen
)

const useUpdateSearchOpen = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch({
      type: UPDATE_SEARCH_OPEN
    })
  }, [dispatch])
}


const useSearchTerm = () => useSelector(
  ({header}) => header.searchTerm
)

const useUpdateSearchTerm = () => {
  const dispatch = useDispatch();
  return useCallback((searchTerm) => {
    dispatch({
      type: UPDATE_SEARCH_TERM,
      payload: searchTerm
    })
  }, [dispatch])
}


const useNavigationOpen = () => useSelector(
  ({header}) => header.navigationOpen
)

const useUpdateNavigationOpen = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch({
      type: UPDATE_NAVIGATION_OPEN
    })
  }, [dispatch])
}


export {
  useUpdateNavigationOpen,
  useNavigationOpen,
  useSearchOpen,
  useUpdateSearchOpen,
  useSearchTerm,
  useUpdateSearchTerm
}

export default {
  header: reducer
}


