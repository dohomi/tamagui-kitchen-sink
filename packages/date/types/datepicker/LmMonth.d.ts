/// <reference types="react" />
import { UseMonthProps } from '@datepicker-react/hooks';
export type LmMonthProps = UseMonthProps & {
    onPrevious?: () => void;
    onNext?: () => void;
    monthsCount: number;
    isFirst: boolean;
    isLast: boolean;
};
export declare function LmMonth({ onPrevious, onNext, monthsCount, isFirst, isLast, ...props }: LmMonthProps): JSX.Element;
//# sourceMappingURL=LmMonth.d.ts.map