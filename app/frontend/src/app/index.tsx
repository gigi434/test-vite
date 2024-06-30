import { useMemo } from 'react'
import { RouterProvider } from 'react-router-dom'

import { AppProvider } from '@/src/provider'
import { createRouter } from '@/src/app/routes'

const AppRouter = () => {
  const router = useMemo(() => createRouter(), [])

  return <RouterProvider router={router} />
}

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
