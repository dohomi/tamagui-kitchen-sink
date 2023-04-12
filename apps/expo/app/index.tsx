import { HomeScreen } from 'app/src/features/home/HomeScreen'
import { AppShell } from '../components/AppShell'

export default function Home() {
  return (
    <AppShell title={'Home'}>
      <HomeScreen />
    </AppShell>
  )
}
