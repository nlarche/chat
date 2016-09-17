// bundle de test pour karma et Webpack
import angular from 'angular';

import mocks from 'angular-mocks';

// Ajout au context webpack (require) des fichiers sources
let context = require.context('../src/', true, /\.spec\.js/);
context.keys().forEach(context);
