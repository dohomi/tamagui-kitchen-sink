const fs = require('fs')
const uppercamelcase = require('uppercamelcase')
const path = require('path')
const prettier = require('prettier')
const util = require('@mdi/util')
const meta = util.getMeta(true);

const rootDir = path.join(__dirname, '..')

fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), '', 'utf-8')

meta.forEach((i) => {
    const id = `mdi-${i.name}`

    const fileName = id + '.tsx'
    const location = path.join(rootDir, 'src/icons', fileName)

    const cname = uppercamelcase(id)

    const element = `
      import { memo } from 'react'
      import { IconProps } from '../IconProps'
      import {
        Svg,
        Path
      } from 'react-native-svg'
      import { themed } from '../themed'
      const Icon = (props) => {
        const { color = 'black', size = 24, ...otherProps } = props
        return (
          <Svg id="${id}" viewBox="0 0 24 24" fill={color} {...otherProps}><Path d="${i.path}"/></Svg>
        )
      }
      Icon.displayName = '${cname}'
      export const ${cname} = memo<IconProps>(themed(Icon))
    `

    const component = element
    //     prettier.format(element, {
    //     singleQuote: true,
    //     trailingComma: 'es5',
    //     arrowParens: 'always',
    //     plugins: [require.resolve('prettier-plugin-import-sort')],
    //     parser: 'typescript',
    //     semi: false,
    // })

    fs.writeFileSync(location, component, 'utf-8')

    const exportString = `export { ${cname} } from './icons/${id}'\n`

    fs.appendFileSync(path.join(rootDir, 'src', 'index.ts'), exportString, 'utf-8')
})
