import { lazy } from 'react'
const Home = lazy(() => import('@src/views/main/home/Home'))
const Partner = lazy(() => import('@src/views/main/partner/Partner'))


const Homes_Routes = [
  {
    path: '/',
    element: <Home />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/partner',
    element: <Partner />,
    meta: {
      layout: "blank"
    }
  }
]

export default Homes_Routes
