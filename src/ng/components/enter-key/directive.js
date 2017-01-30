//
// Written my Steve Saxton <steves@codeuniquely.co.uk>
// Enter Key in input - directve
//

/* @ngInject */
export default () => {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.bind('keydown keypress', (event) => {
        if(event.which === 13) {
          scope.$apply( () => {
            scope.$eval(attrs.enterKey);
          });
          event.preventDefault();
        }
      });
    }
  };
};
