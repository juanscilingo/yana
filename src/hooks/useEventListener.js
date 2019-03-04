import { useEffect, useRef } from "react";

// Hook created by siddharthkp: https://github.com/siddharthkp/use-event-listener/blob/master/index.js
// Based on Dan Abramov implementation of useInterval: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useEventListener(
  eventName,
  callback,
  element = window
) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(
    function() {
      if (typeof element === "undefined") return;

      const eventListener = event => savedCallback.current(event);

      element.addEventListener(eventName, eventListener);

      return function cleanup() {
        return element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName]
  );
}
