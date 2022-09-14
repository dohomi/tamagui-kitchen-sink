import {createParam} from 'solito'

const {useParam} = createParam()

export const useRouteParam = (param: string, pickFirst?: boolean): [string | string[] | undefined, (val: string) => void] => {
    const [value, setParam] = useParam(param)
    const parsedValue = pickFirst ? value?.[0] : value
    return [parsedValue, setParam]
}