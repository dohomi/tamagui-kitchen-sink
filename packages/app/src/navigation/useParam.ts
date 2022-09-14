import {createParam} from 'solito'

const {useParam} = createParam()

export const useRouteParam = (param: string, pickFirst?: boolean) => {
    const [value, setParam] = useParam(param)
    const parsedValue = pickFirst ? value?.[0] : value
    return [parsedValue, setParam]
}