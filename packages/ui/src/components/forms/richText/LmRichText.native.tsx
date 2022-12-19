import { useState } from 'react'
import { RichTextEditor, RichTextViewer } from '@siposdani87/expo-rich-text-editor'
import { StyleSheet } from 'react-native'

const htmlStr = '<p><i><u>Underline italic text</u></i> <b>bold word</b> normal words</p>'

export const LmRichText = () => {
  const [value, setValue] = useState('')

  const getColor = (selected: boolean): string => {
    return selected ? 'red' : 'black'
  }

  // const getActionMap = (): ActionMap => {
  //   return {
  //     [ActionKey.bold]: ({ selected }) => (
  //       <MaterialIcons name="format-bold" size={14} color={getColor(selected)} />
  //     ),
  //   }
  // }

  const onValueChange = (v: string): void => {
    console.log('onValueChange', v)
    setValue(v)
  }

  return (
    <>
      <RichTextEditor
        minHeight={150}
        value={value}
        selectionColor="green"
        // actionMap={getActionMap()}
        onValueChange={onValueChange}
        toolbarStyle={styles.toolbar}
        editorStyle={styles.editor}
      />

      <RichTextViewer value={htmlStr} editorStyle={styles.viewer} linkStyle={styles.link} />
    </>
  )
}

const styles = StyleSheet.create({
  viewer: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 5,
    // fontFamily: 'Oswald_400Regular',
  },
  editor: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 5,
    // fontFamily: 'Inter_500Medium',
    fontSize: 18,
  },
  toolbar: {
    borderColor: 'red',
    borderWidth: 1,
  },
  link: {
    color: 'green',
  },
})
