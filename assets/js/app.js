// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

import './assets/js/bootstrap.js';

// Prefetch in-viewport links during idle time
import { listen } from 'quicklink/dist/quicklink.mjs';
listen();

// lazy sizes for image loading
import 'lazysizes';

// global alert
import './assets/js/alert';

import '@pwabuilder/pwaupdate/dist/pwa-update.js';

const el = document.createElement('pwa-update');
document.body.appendChild(el);
