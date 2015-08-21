(function() {
    "use strict";

    angular.module('app')
        .directive('imageUpload', ['appSettings', ImageUpload]);

    function ImageUpload(appSettings) {
        return {
            restrict: 'E',
            scope: {
                imageSource: '='
            },
            link: function(scope, element, attrs) {
                scope.fileChanged = function(elem) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        scope.$apply(function() {
                            scope.imageSource = e.target.result;
                        });
                    };
                    reader.readAsDataURL(elem.files[0]);
                };

                scope.selectFile = function () {
                    angular.element(element).find(".image-file-input").trigger('click');
                };

                scope.imagePreviewSource = function() {
                    return scope.imageSource || appSettings.defaultCompanyImageUrl;
                };
            },
            templateUrl: appSettings.templatesFolderPath + 'image-upload.cshtml'
        };
    }
})();