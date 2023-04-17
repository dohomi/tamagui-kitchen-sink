import { createContext } from 'react';
function error() {
    throw new Error('[solito] useLinkTo should not be called on Web. Is next/router defined?');
}
export const MiddlewareContext = createContext({
    useLinkTo() {
        return error;
    },
});
//# sourceMappingURL=context.web.js.map