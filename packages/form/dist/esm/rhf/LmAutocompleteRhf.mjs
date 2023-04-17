import { Controller } from "react-hook-form";
import { LmAutocomplete } from "../LmAutocomplete";
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
  return <Controller
    name={name}
    rules={rules}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value }, fieldState: { error } }) => {
      let currentValue = multiple ? value || [] : value || null;
      if (matchId) {
        currentValue = multiple ? (value || []).map((i) => options.find((j) => (j.value || j) === i)) : options.find((i) => (i.value || i) === value) || null;
      }
      return <LmAutocomplete
        {...inputProps}
        value={currentValue}
        multiple={multiple}
        options={options}
        error={!!error}
        onChange={(v) => {
          let changedVal = v;
          if (matchId) {
            changedVal = Array.isArray(v) ? v.map((i) => (i == null ? void 0 : i.value) || i) : (v == null ? void 0 : v.value) || v;
          }
          onChange(changedVal);
          if (typeof inputProps.onChange === "function") {
            inputProps.onChange(v);
          }
        }}
        helperText={error ? error.message : inputProps.helperText}
      />;
    }}
  />;
}
export {
  LmAutocompleteRhf
};
//# sourceMappingURL=LmAutocompleteRhf.mjs.map
