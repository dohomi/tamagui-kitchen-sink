import {render} from "@testing-library/react-native";
import {LmTamaguiProvider} from "app/provider/LmTamaguiProvider";
import {ReactElement} from "react";

export function renderUi(ui: ReactElement) {
    return render(ui, {wrapper: LmTamaguiProvider})
}

