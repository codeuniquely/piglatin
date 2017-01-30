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
    this.bindFunctions();
  }

  bindFunctions() {
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.count = this.count.bind(this);
  }

  // private functions follow
  count() {
    return this.counter;
  }

  // empy entries will not be allowed
  add(entry) {
    if (typeof entry === 'undefined' || entry.trim().length === 0) {
      return;
    }
    ++this.index;
    if (this.index===this.size) {
      this.index = 0;
    }
    this._array[this.index] = entry;
    if (this.counter < this.size) {
      this.counter++;
    }
  }

  list() {
    let index = (this.index + 1) % this.size;
    let values = [];
    for(let i=0 ; i < this.size ; i++) {
      let entry = this._array[index];
      if (entry) {
        values.push(entry);
      }
      (++index) % this.size;
    }
    return values;
  }
}

export default angular.module('myApp.services.storage',  [])
  .service('StorageService', service)
  .name;
