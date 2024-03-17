import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { router } from './routes/Router'


export function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </>
  )
}

