angular-cordova-battery-status
==============================

Bring Apache Cordova Battery Status API to AngularJS Mobile Apps...

Define a simple service to deal with Cordova Battery Status Plugin (https://github.com/apache/cordova-plugin-battery-status).

[![Build Status](https://travis-ci.org/xelita/angular-cordova-battery-status.png?branch=master)](https://travis-ci.org/xelita/angular-cordova-battery-status)

Usage
-----
Include cordovaBatteryStatusModule.js in your Cordova application.

```html
<script src="js/cordovaBatteryStatusModule.js"></script>
```

or use the minified version:

```html
<script src="js/cordovaBatteryStatusModule.min.js"></script>
```

Add the module `cordovaBatteryStatusModule` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['cordovaBatteryStatusModule']);
```

Use the cordovaBatteryStatusService and cordovaBatteryStatusConstants as controller dependencies and call cordovaBatteryStatusService API:

```js
$scope.addBatteryStatusChangedListener = function() {
    cordovaBatteryStatusService.onCriticalBatteryStatus(cordovaBatteryStatusConstants.critical, function(info){
        alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
    });
};
```

Sample
------
A sample based on Ionic Framework can be found here:
https://github.com/xelita/angular-cordova-plugins-sample
