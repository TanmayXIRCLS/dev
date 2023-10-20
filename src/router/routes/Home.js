import { lazy } from 'react'
import { Developer } from '../../views/main/developer/Developer'
const Home = lazy(() => import('@src/views/main/home/Home'))
const Partner = lazy(() => import('@src/views/main/partner/Partner'))
const SuperLeadz = lazy(() => import('@src/views/main/superLeadz/SuperLeadz'))


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
  },
  {
    path: '/superleadz',
    element: <SuperLeadz />,
    meta: {
      layout: "blank"
    }
  },
  {
    path: '/developer',
    element: <Developer />,
    meta: {
      layout: "blank"
    }
  }
]

export default Homes_Routes
