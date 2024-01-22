import { Label, Switch, XStack } from "tamagui";
import { useId } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function LmSwitch({
  labelLeft,
  labelRight,
  space,
  size = "$2",
  thumbProps,
  ...rest
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(XStack, { alignItems: "center", space: "$4", children: [
    labelLeft && /* @__PURE__ */ jsx(Label, { htmlFor: id, size, children: labelLeft }),
    /* @__PURE__ */ jsx(Switch, { id, ...rest, size, children: /* @__PURE__ */ jsx(Switch.Thumb, { animation: "bouncy", ...thumbProps }) }),
    labelRight && /* @__PURE__ */ jsx(Label, { htmlFor: id, size, children: labelRight })
  ] });
}
export {
  LmSwitch
};
//# sourceMappingURL=LmSwitch.js.map
