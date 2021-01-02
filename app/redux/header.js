import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UPDATE_NAVIGATION = 'UPDATE_NAVIGATION'

const initialState = {
  navigationOpen: false
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAVIGATION:
      return {
        ...state,
        navigationOpen: !state.navigationOpen
      }
    default:
      return state;
  }
}

const useNavigationOpen = () => useSelector(
  ({header}) => header.navigationOpen
)

const useUpdateNavigation = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch({
      type: UPDATE_NAVIGATION
    })
  }, [dispatch])
}


export {
  useNavigationOpen,
  useUpdateNavigation
}

export default {
  header: reducer
}


