import { InertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import ReactDOM from 'react-dom'
import SplashScreen from './Layouts/Splash'

import '../css/app.css'

InertiaProgress.init()

const app = document.getElementById('app') as HTMLElement
const init = JSON.parse(app.dataset.page as string)

const resolver = (name: string) =>
  import(`./Pages/${name}`).then(module => {
    const page = module.default
    return page
  })

ReactDOM.render(
  <InertiaApp
    initialPage={init}
    resolveComponent={resolver}
    initialComponent={SplashScreen}
  />,
  app
)
