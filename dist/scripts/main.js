(function (angular) {
    'use strict';

    angular.
        module('custom-checkbox', []);
})(angular);




(function (angular) {
    'use strict';

    angular.
        module('custom-checkbox')
        .directive('customCheckbox', customCheckbox);

    function customCheckbox() {
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, controllers) {
            var checkBoxId = attrs.id,
                checkBoxLabel = attrs.label;
            if (checkBoxId === undefined || checkBoxId === "") {
                throw new Error('custom-checkbox directive need id!');
            }
            if (checkBoxLabel === undefined) {
                element.after('<label for="' + checkBoxId + '" class="fa"></label>');
            }
            else {
                element.after('<label for="' + checkBoxId + '" class="fa checkbox-with-label"></label>' +
                '<label class="custom-checkbox-label" for="' + checkBoxId + '">' + checkBoxLabel + '</label>');
            }


        }
    }
})(angular);