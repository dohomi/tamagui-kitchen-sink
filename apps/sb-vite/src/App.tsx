import './App.css'
import { LmTamaguiProvider } from 'app/src/provider/LmTamaguiProvider.tsx'
import { RootStack } from './Router.tsx'

function App() {
  return (
    <LmTamaguiProvider disableInjectCSS={false}>
      <RootStack />
    </LmTamaguiProvider>
  )
}

export default App
