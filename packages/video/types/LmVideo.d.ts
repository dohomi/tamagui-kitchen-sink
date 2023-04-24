/// <reference types="react" />
import { Video } from 'expo-av';
import { StyleProp } from 'react-native';
export declare const LmVideo: import("react").ForwardRefExoticComponent<Omit<import("expo-av").VideoProps, "style" | "source"> & {
    src: string;
    width?: number | undefined;
    height?: number | undefined;
    style?: Omit<StyleProp<import("react-native").View>, "width" | "height"> | undefined;
    aspectRatio?: number | undefined;
    containerProps?: (Omit<import("react-native").ViewProps, "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular"> & {
        readonly unstyled?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    } & import("@tamagui/web").MediaProps<Partial<Omit<import("react-native").ViewProps, "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular"> & {
        readonly unstyled?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>> & import("@tamagui/web").PseudoProps<Partial<Omit<import("react-native").ViewProps, "children" | "onLayout" | "display" | keyof import("react-native").GestureResponderHandlers> & import("@tamagui/web").ExtendBaseStackProps & import("tamagui").TamaguiComponentPropsBase & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase>> & import("@tamagui/core/types/reactNativeTypes").RNViewProps & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: import("tamagui").SizeTokens | undefined;
    }, "size" | "unstyled" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "circular"> & {
        readonly unstyled?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly size?: import("tamagui").SizeTokens | undefined;
    }>>) | undefined;
    posterSource?: import("react-native").ImageSourcePropType | undefined;
} & import("react").RefAttributes<Video>>;
//# sourceMappingURL=LmVideo.d.ts.map