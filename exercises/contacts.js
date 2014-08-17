"use strict";

var contactsApp = angular.module("Contacts", ["firebase"]);

contactsApp.controller("ContactsController", ["$scope", "$firebase", function ($scope, $firebase) {
    var url = 'https://blazing-heat-2900.firebaseio.com/contacts';
    var fireRef = new Firebase(url);
    var sync = $firebase(fireRef);
    $scope.contacts = sync.$asArray();

    $scope.currentContact = {};

    $scope.add = function () {
        console.log($scope.contacts);
        sync.$push($scope.currentContact);
        $scope.currentContact = {};
    };

    $scope.select = function (contact) {
        $scope.currentContact = contact;
    };

    $scope.clear = function () {
        $scope.currentContact = {};
    };

    $scope.delete = function (index) {
        $scope.contacts.splice(index, 1);
    };
}]);