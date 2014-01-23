'use strict';

angular.module('bahmni.common.patient').directive('patientSummary', function() {
    var link = function($scope, elem, attrs) {
        $scope.showPatientDetails = false;
        $scope.togglePatientDetails = function() {
            $scope.showPatientDetails = !$scope.showPatientDetails;
        }

        $scope.onImageClick = function() {
            if($scope.onImageClickHandler) {
                $scope.onImageClickHandler();
            }
        }
    }

    return {
        restrict: 'E',
        templateUrl: '../common/modules/patient/header/views/patientSummary.html',
        link: link,
        required: 'patient',
        scope: {
            patient: "=",
            bedDetails: "=",
            onImageClickHandler: "&",
        }
    }
})