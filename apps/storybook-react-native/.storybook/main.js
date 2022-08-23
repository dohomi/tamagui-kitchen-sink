module.exports = {
    stories: [
        "../../../packages/app/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    ],
    addons: [
        '@storybook/addon-ondevice-notes',
        '@storybook/addon-ondevice-controls',
        '@storybook/addon-ondevice-backgrounds',
        '@storybook/addon-ondevice-actions',
        // "@storybook/addon-links",
        // "@storybook/addon-essentials"
    ]
}
