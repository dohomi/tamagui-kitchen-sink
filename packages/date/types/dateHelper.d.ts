type MonthNamesProps = {
    options?: Intl.DateTimeFormatOptions;
    localeName?: string;
};
export declare function getMonthNames(props?: MonthNamesProps): string[];
export declare const getMonthOptions: (props?: MonthNamesProps) => {
    value: number;
    label: string;
}[];
export declare const getLocaleDate: ({ localeName, options, date }: MonthNamesProps & {
    date: Date;
}) => string;
export {};
//# sourceMappingURL=dateHelper.d.ts.map