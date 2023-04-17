import { useRef, useMemo, useEffect } from 'react';
/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */
function useStableCallback(callback) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    });
    // https://github.com/facebook/react/issues/19240
    return useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
export { useStableCallback };
//# sourceMappingURL=use-stable-callback.js.map