// ===========================================================
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// App Page
// ===========================================================
import template from './template.html';
import controller from './controller';

const stateInsertPoint = 'app';

/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider
    .state( stateInsertPoint, {
      url: '/',
      controller: controller,
      template: template,
      resolve: {
        PigLatinService: 'PigLatinService',
        StorageService: 'StorageService',
      }
    });
}
