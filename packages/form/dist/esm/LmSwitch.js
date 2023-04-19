import { jsx, jsxs } from "react/jsx-runtime";
import { Label, Switch, XStack } from "tamagui";
import { useId } from "react";
function LmSwitch({ labelLeft, labelRight, space, size = "$2", ...rest }) {
  const id = useId();
  return /* @__PURE__ */ jsxs(XStack, { alignItems: "center", space: "$4", children: [
    labelLeft && /* @__PURE__ */ jsx(Label, { htmlFor: id, fontSize: size, children: labelLeft }),
    /* @__PURE__ */ jsx(Switch, { id, ...rest, size, children: /* @__PURE__ */ jsx(Switch.Thumb, { animation: "bouncy" }) }),
    labelRight && /* @__PURE__ */ jsx(Label, { htmlFor: id, fontSize: size, children: labelRight })
  ] });
}
export {
  LmSwitch
};
//# sourceMappingURL=LmSwitch.js.map
