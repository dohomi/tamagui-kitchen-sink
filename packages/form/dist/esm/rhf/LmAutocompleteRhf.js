import { Controller } from "react-hook-form";
import { LmAutocomplete } from "../LmAutocomplete";
import { jsx } from "react/jsx-runtime";
function LmAutocompleteRhf({
  name,
  rules,
  control,
  defaultValue,
  matchId,
  options,
  multiple,
  ...inputProps
}) {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      rules,
      control,
      defaultValue,
      render: ({ field: { onChange, value }, fieldState: { error } }) => {
        let currentValue = multiple ? value || [] : value || null;
        return matchId && (currentValue = multiple ? (value || []).map((i) => options.find((j) => (j.value || j) === i)) : options.find((i) => (i.value || i) === value) || null), /* @__PURE__ */ jsx(
          LmAutocomplete,
          {
            ...inputProps,
            value: currentValue,
            multiple,
            options,
            error: !!error,
            onChange: (v) => {
              let changedVal = v;
              matchId && (changedVal = Array.isArray(v) ? v.map((i) => i?.value || i) : v?.value || v), onChange(changedVal), typeof inputProps.onChange == "function" && inputProps.onChange(v);
            },
            helperText: error ? error.message : inputProps.helperText
          }
        );
      }
    }
  );
}
export {
  LmAutocompleteRhf
};
//# sourceMappingURL=LmAutocompleteRhf.js.map
