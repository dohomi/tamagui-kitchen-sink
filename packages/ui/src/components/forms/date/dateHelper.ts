type MonthNamesProps = {
    options?: Intl.DateTimeFormatOptions,
    localeName?: string
};

export function getMonthNames(props?: MonthNamesProps) {
    const {localeName = 'en-EN', options} = props || {}
    const format = new Intl
        .DateTimeFormat(localeName, {month: options?.month || 'long', ...options}).format;
    return [...Array(12).keys()]
        .map((m) => format(new Date(Date.UTC(2021, (m) % 12))));
}

export const getMonthOptions = (props?: MonthNamesProps) =>
    getMonthNames(props).map((name, index) => ({value: index + 1, label: name}))

export const getLocaleDate = ({localeName, options, date}: MonthNamesProps & { date: Date }) => {
    return date ? new Intl.DateTimeFormat(localeName, options ?? {
        month: '2-digit',
        year: 'numeric',
        day: '2-digit'
    }).format(date) : null
}