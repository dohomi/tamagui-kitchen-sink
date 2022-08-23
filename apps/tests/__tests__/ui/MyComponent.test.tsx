import React from 'react';
import {MyComponent} from '@my/ui';
import {renderUi} from "../../src";

describe('<MyComponet />', () => {
    it('has 1 child', () => {
        const {type, children} = renderUi(<MyComponent>hello</MyComponent>).toJSON();
        expect(type).toBe('View')
        expect(children.length).toBe(1)
    });
});