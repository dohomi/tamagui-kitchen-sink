import { createElement, forwardRef } from 'react';
import { useSolitoImage } from './use-solito-image';
export function createSolitoImage(Component) {
    return forwardRef(function Img(props, ref) {
        const imageProps = useSolitoImage(props);
        return createElement(Component, { ...imageProps, ref });
    });
}
//# sourceMappingURL=create-solito-image.js.map