/// <reference types="react" />
import { ControllerProps } from 'react-hook-form';
import { LmDatepickerProps } from '../datepickerTypes';
export type LmDatepickerRhf = LmDatepickerProps & Pick<ControllerProps, 'control' | 'rules'> & {
    start: string;
    end?: string;
};
export declare function LmDatepickerRhf({ start, end, control, rules, required, ...datepickerProps }: LmDatepickerRhf): JSX.Element;
//# sourceMappingURL=LmDatepickerRhf.d.ts.map