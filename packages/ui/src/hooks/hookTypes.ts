export type OptionalIndexValue<T> = { index?: number; value?: T };
export type OptionalIndicesValues<T> = {
    indices?: number[];
    values?: T[];
};

export type TypeOfCall = { index?: number, value?: string | number };


export function warnIfBothValueAndIndexAreProvided<T>(
    functionName: string,
    object: OptionalIndexValue<T> | OptionalIndicesValues<T>
) {
    if (Object.values(object).every((value) => typeof value !== "undefined")) {
        console.warn(
            `${functionName}. Expected either ${Object.keys(object).join(
                " or "
            )} to be provided. However all were provided`
        );
    } else if (
        Object.values(object).every((value) => typeof value === "undefined")
    ) {
        console.warn(
            `${functionName}. ${Object.keys(object).join(" , ")} are all undefined.`
        );
    }
}