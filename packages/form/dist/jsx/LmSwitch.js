import { Label, Switch, XStack } from "tamagui";
import { useId } from "react";
function LmSwitch({
  labelLeft,
  labelRight,
  space,
  size = "$2",
  thumbProps,
  ...rest
}) {
  const id = useId();
  return <XStack alignItems="center" space="$4">
    {labelLeft && <Label htmlFor={id} size={size}>{labelLeft}</Label>}
    <Switch id={id} {...rest} size={size}><Switch.Thumb animation="bouncy" {...thumbProps} /></Switch>
    {labelRight && <Label htmlFor={id} size={size}>{labelRight}</Label>}
  </XStack>;
}
export {
  LmSwitch
};
//# sourceMappingURL=LmSwitch.js.map
