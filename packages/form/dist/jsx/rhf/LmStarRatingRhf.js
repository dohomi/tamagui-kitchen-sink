import { Controller } from "react-hook-form";
import { LmStarRating } from "../LmStarRating";
function LmStarRatingRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return <Controller
    name={name}
    rules={rules}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value } }) => <LmStarRating {...inputProps} onChange={onChange} value={value ?? null} />}
  />;
}
export {
  LmStarRatingRhf
};
//# sourceMappingURL=LmStarRatingRhf.js.map
