//
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// Code a simple cicular array (default to 10 entries)
//
import angular from 'angular';

class service {

  constructor(size = 10) {
    this._array = new Array(size);
    this.index = -1;
    this.counter = 0;
    this.size = size;
  }
}

export default angular.module('myApp.services.storage',  [])
  .service('StorageService', service)
  .name;
