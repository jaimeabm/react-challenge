import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/components/App'
import storeCreated from './src/store'


// Import libraries(bootstrap), css's, fonts
import fontawesome from '@fortawesome/fontawesome/index'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import faCheckCircle from '@fortawesome/fontawesome-free-solid/faCheckCircle'
import faGooglePlusSquare from '@fortawesome/fontawesome-free-brands/faGooglePlusSquare'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faMusic from '@fortawesome/fontawesome-free-solid/faMusic'

fontawesome.library.add(faBars, faMusic,faAngleDown, faSearch, faCheckCircle)
fontawesome.library.add(faGooglePlusSquare,faFacebook, faTwitter)

import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/responsive.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = storeCreated

window.React = React
//window.store = store
render(<Provider store={store}>
            <App />
       </Provider>,
    document.getElementById('react-container')
)