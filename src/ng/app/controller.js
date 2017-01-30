// ==========================================================
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// App Controller
// ==========================================================
import angular from 'angular';

export default class AppController {

  /* @ngInject */
  constructor($scope, $state, PigLatinService, StorageService ) {

    this.$scope = $scope;
    this.$state = $state;

    // safe reference to model service
    this.PigLatinService = PigLatinService;
    this.StorageService = StorageService;

    // define a model
    $scope.model = {
      input : undefined,
      useWiki: undefined,
      converted: undefined,
      entries: []
    };

    this.bindFunctions();
  }

  bindFunctions() {
    this.$scope.addEntry = this.addEntry.bind(this);
    this.$scope.message = this.countMessage.bind(this);
  }

  addEntry() {
    let model = this.$scope.model;
    let useWiki = this.$scope.model.useWiki || false;

    let converted = this.PigLatinService.translate(model.input, useWiki);
    this.StorageService.add(converted);

    // update the model with new values
    model.converted = converted;
    model.entries = angular.copy(this.StorageService.list());
    model.input = undefined;
  }

  countMessage() {
    let count = this.StorageService.count();
    return (count===1) ? ' (1 entry)' : ` (${count} entries)`;
  }
}
