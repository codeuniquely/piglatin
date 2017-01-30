import angular from 'angular';

// import a number of general services;
import pigLatinService from 'services/pig-latin.service';
import storageService from 'services/storage.service';

// input enforcement
import ensureText from 'components/ensure-text';
import enterKey  from 'components/enter-key';

// app styling
import 'style/app.scss';

// app routing
import routing from './routing';

export default angular.module('MyApp.app', [

  // simple support services
  pigLatinService, storageService,

  // deal with inputs
  ensureText, enterKey
])
.config(routing)
.name;
