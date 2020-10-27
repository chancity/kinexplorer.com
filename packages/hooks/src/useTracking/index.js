import {useDispatch} from 'react-redux';

const TRACK_EVENT = 'TRACK_EVENT';

const _trackAction = (payload) => ({
  type: TRACK_EVENT,
  payload,
});

/**
 * Hook to dispatch track event with any arbitrary payload
 * @returns {function(payload:any): *}
 * @example
 *  const track = useTracking();
 *  track({eventType: "Save and Continue", step: "Shipping"})
 */
const useTracking = () => {
  const dispatch = useDispatch();
  return (payload) => dispatch(_trackAction(payload));
};

export default useTracking;
