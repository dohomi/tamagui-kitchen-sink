import React from 'react';
import {LmButton} from '@tamagui-extras/ui';
import {renderUi} from "../../src";

describe('<MyComponet />', () => {
    it('has 1 child', () => {
        const {type, children} = renderUi(<LmButton>hello</LmButton>).toJSON();
        expect(type).toBe('View')
        expect(children.length).toBe(1)
    });
});