//
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// Ensure Friendly Text Only in the Input directve
//

/* @ngInject */
export default () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, element, attrs, ctrl) => {
      // limit the input to useful pig-latin friendly characters as the user types
      ctrl.$parsers.push( inputValue => {
        let transformedInput = inputValue.replace(/[^/a-zA-Z ]+/g, '');
        if (transformedInput!==inputValue) {
          ctrl.$setViewValue(transformedInput);
          ctrl.$render();
        }
        return transformedInput;
      });
    }
  };
};
