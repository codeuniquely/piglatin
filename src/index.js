/*
 * This file is a part of simple pig-latin application.
 * Written my Steve Saxton <steves@codeuniquely.co.uk>
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// early import CSS to for angular
import 'style/cloak.scss';

// Pull in the pages for the application
import app from 'code/app';

import location from 'code/config/location';

angular.module('myApp', [uiRouter, app])
  .config(location);
