//
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// Enter Keydirectve
//
import angular from 'angular';
import directive from './directive';

export default angular.module('myApp.enter-key', [])
  .directive('enterKey', directive)
  .name;
