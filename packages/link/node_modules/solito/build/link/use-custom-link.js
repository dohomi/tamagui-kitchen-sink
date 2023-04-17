import { Platform } from 'react-native';
import { useRouter } from '../router';
export function useLink({ href, as, shallow, scroll, replace, experimental, }) {
    const router = useRouter();
    // https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/useLinkProps.tsx#L64
    const onPress = (e) => {
        let shouldHandle = false;
        if (Platform.OS !== 'web' || !e) {
            shouldHandle = e ? !e.defaultPrevented : true;
        }
        else if (!e.defaultPrevented && // onPress prevented default
            // @ts-expect-error: these properties exist on web, but not in React Native
            !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && // ignore clicks with modifier keys
            // @ts-expect-error: these properties exist on web, but not in React Native
            (e.button == null || e.button === 0) && // ignore everything but left clicks
            // @ts-expect-error: these properties exist on web, but not in React Native
            [undefined, null, '', 'self'].includes(e.currentTarget?.target) // let browser handle "target=_blank" etc.
        ) {
            e.preventDefault();
            shouldHandle = true;
        }
        if (shouldHandle) {
            if (href === '#') {
                // this is a way on web to stay on the same page
                // useful for conditional hrefs
                return;
            }
            if (replace) {
                router.replace(href, as, { shallow, scroll, experimental });
            }
            else {
                router.push(href, as, {
                    shallow,
                    scroll,
                });
            }
        }
    };
    return {
        accessibilityRole: 'link',
        onPress,
        href: router.parseNextPath(as || href),
    };
}
//# sourceMappingURL=use-custom-link.js.map