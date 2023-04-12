import { PlaygroundScreen } from 'app/src/features/playground/playground'
import { AppShell } from '../components/AppShell'

export default function Playground() {
  return (
    <AppShell title={'Playground'}>
      <PlaygroundScreen />
    </AppShell>
  )
}
