"use strict";

var contactsApp = angular.module("Contacts", ["firebase"]);

contactsApp.controller("ContactsController", ["$scope", "$firebase", function($scope, $firebase){
    var url = 'https://blazing-heat-2900.firebaseio.com/contacts';           // blazing-heat-2900
    var fireRef = new Firebase(url);
    var sync = $firebase(fireRef);
    //var syncObject = sync.$asObject();
    $scope.contacts = sync.$asArray;
    //syncObject.$bindTo($scope, 'contacts');

    //$scope.currentContact = {};
    //$scope.contact = $firebase(fireRef);

//  $scope.contacts = [
//    {firstName: 'Troy', lastName: 'Miles',  eMail: 'rockncoder@gmail.com', city: 'Irvine', state: 'CA', zipCode: '92618'},
//    {firstName: 'Jimi', lastName: 'Hendrix',  eMail: 'jhendrix@eletricladyland.com', city: 'Seattle', state: 'WA', zipCode: '98101'},
//    {firstName: 'Prince', lastName: 'Rodgers',  eMail: 'prince@purplerain.com', city: 'Minneapolis', state: 'MN', zipCode: '55305'},
//  ];
    $scope.currentContact = {};

    $scope.add = function () {
        console.log($scope.contacts);                          // For debugging in chrome
        sync.$push($scope.currentContact);
        //$scope.contacts.$push($scope.currentContact);          // Put in $push instead of push
        $scope.currentContact = {};
    };

    $scope.select = function(index) {
        $scope.currentContact = contact;
    };

    $scope.clear = function() {
        $scope.currentContact = {};
    };

    $scope.delete = function (index) {
        //$scope.contacts.splice(index, 1);
        $scope.contacts = $scope.contact.filter(function(curr){
            return curr.eMail != contact.eMail;
        });
//        $scope.contacts.forEach(function(curr) {
//           if (curr.eMail == contact.eMail) {
//
//           }
//        });
    };

    $scope.contacts = $firebase(fireRef);


}]);