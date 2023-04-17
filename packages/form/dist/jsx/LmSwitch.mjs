import { Label, Switch, XStack } from "tamagui";
import { useId } from "react";
function LmSwitch({ labelLeft, labelRight, space, size = "$2", ...rest }) {
  const id = useId();
  return <XStack alignItems="center" space="$4">
    {labelLeft && <Label htmlFor={id} fontSize={size}>{labelLeft}</Label>}
    <Switch id={id} {...rest} size={size}><Switch.Thumb animation="bouncy" /></Switch>
    {labelRight && <Label htmlFor={id} fontSize={size}>{labelRight}</Label>}
  </XStack>;
}
export {
  LmSwitch
};
//# sourceMappingURL=LmSwitch.mjs.map
