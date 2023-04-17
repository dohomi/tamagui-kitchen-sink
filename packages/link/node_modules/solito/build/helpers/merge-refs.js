// credit: https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
export function mergeRefs(refs) {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref != null) {
                ;
                ref.current = value;
            }
        });
    };
}
//# sourceMappingURL=merge-refs.js.map