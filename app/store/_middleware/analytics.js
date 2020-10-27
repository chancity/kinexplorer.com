const replacer = (key, value) => (typeof value === 'undefined' ? null : value);
export const deepClone = (value) => JSON.parse(JSON.stringify(value, replacer));
const eventQueue = [];

export default ({getState}) => {
  return (next) => (action) => {
    const returnValue = next(action);

    try {
      const newState = getState();
      const eventState = {...newState};
      const eventData = {
        action: {...action},
        state: eventState,
      };
      if (process.browser && typeof action.type === 'string') {
        if (typeof window._satellite !== 'undefined') {
          if (eventQueue.length > 0) {
            eventQueue.forEach((data) => {
              window._satellite.track(data.type, data.details);
            });
            eventQueue.length = 0;
          }
          window._satellite.track(action.type, deepClone(eventData));
        } else {
          eventQueue.push({
            type: action.type,
            details: deepClone(eventData),
          });
        }
      }
    } catch (error) {
      console.debug('error in analytics middleware', error);
    }
    return returnValue;
  };
};

/* fetch("https://5jxm3y5g9f.execute-api.us-west-2.amazonaws.com/development", {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(eventData)
}).catch(error => console.log(error)); */
