import { UseMonthProps } from '@datepicker-react/hooks';
export type LmMonthProps = UseMonthProps & {
    onPrevious?: () => void;
    onNext?: () => void;
    monthsCount: number;
    isFirst: boolean;
    isLast: boolean;
};
export declare function LmMonth({ onPrevious, onNext, monthsCount, isFirst, isLast, ...props }: LmMonthProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=LmMonth.d.ts.map