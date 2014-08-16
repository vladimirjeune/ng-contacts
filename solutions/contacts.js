"use strict";

var contactsApp = angular.module("Contacts", ["firebase"]);

contactsApp.controller("ContactsController", ["$scope", "$firebase", function($scope, $firebase){
  var url = '"https://glaring-fire-7316.firebaseio.com/contacts';
  var fireRef = new Firebase(url);

//  $scope.contacts = [
//    {firstName: 'Troy', lastName: 'Miles',  eMail: 'rockncoder@gmail.com', city: 'Irvine', state: 'CA', zipCode: '92618'},
//    {firstName: 'Jimi', lastName: 'Hendrix',  eMail: 'jhendrix@eletricladyland.com', city: 'Seattle', state: 'WA', zipCode: '98101'},
//    {firstName: 'Prince', lastName: 'Rodgers',  eMail: 'prince@purplerain.com', city: 'Minneapolis', state: 'MN', zipCode: '55305'},
//  ];
  $scope.currentContact = {};

  $scope.add = function () {
    console.log($scope.contacts);
    $scope.contacts.$push($scope.currentContact);
    $scope.currentContact = {};
  };

  $scope.delete = function (index) {
    $scope.contacts.splice(index, 1);
  };

  $scope.contacts = $firebase(fireRef);
}]);