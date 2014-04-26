/**
 * Angular Module relying on Apache Cordova Battery Status Plugin (cordova plugin add org.apache.cordova.battery-status).
 */
var cordovaBatteryStatusModule = angular.module('cordovaBatteryStatusModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaBatteryStatusModule.constant('cordovaBatteryStatusConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0',
    batteryStatusEvent: {
        standard: 'batterystatus',
        low: 'batterylow',
        critical: 'batterycritical'
    }
});

// Services

/**
 * Main service relying on Apache Cordova Battery Status Plugin.
 */
cordovaBatteryStatusModule.factory('cordovaBatteryStatusService', ['$rootScope', '$log', 'cordovaBatteryStatusConstants', function ($rootScope, $log, cordovaBatteryStatusConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaBatteryStatusService.apiVersion.');
            return cordovaBatteryStatusConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaBatteryStatusService.cordovaVersion.');
            return cordovaBatteryStatusConstants.cordovaVersion;
        },

        /**
         * Register a callback that will be invoked when the battery goes in the given status. (see batteryStatusEvent in cordovaBatteryStatusConstants).
         * For more information: https://github.com/apache/cordova-plugin-battery-status/blob/dev/doc/index.md#orgapachecordovabattery-status
         */
        addBatteryStatusChangedListener: function (status, callback) {
            $log.debug('cordovaBatteryStatusService.addBatteryStatusChangedListener.');

            // API call
            document.addEventListener(
                status,
                function (batteryInfo) {
                    $rootScope.$apply(callback(batteryInfo));
                },
                false
            );
        }
    };
}]);


