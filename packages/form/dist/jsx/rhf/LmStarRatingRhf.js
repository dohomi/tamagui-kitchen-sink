import { Controller } from "react-hook-form";
import { LmStarRating } from "../LmStarRating";
import { jsx } from "react/jsx-runtime";
function LmStarRatingRhf({
  name,
  control,
  rules = {},
  defaultValue,
  ...inputProps
}) {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value } }) => /* @__PURE__ */ jsx(LmStarRating, { ...inputProps, onChange, value: value ?? null })
    }
  );
}
export {
  LmStarRatingRhf
};
//# sourceMappingURL=LmStarRatingRhf.js.map
