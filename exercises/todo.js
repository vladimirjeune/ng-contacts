// Whole script is in strict mode
'use strict';

var myTodos =  angular.module('todo', []);

myTodos.controller('TodoController', ['$scope', function($scope){
    //$scope.test = 'Hola';

    $scope.todos = [
    {task: 'Pet a peach', completed: false},
    {task: 'Pet a peach', completed: false},
    {task: 'Bite a kitten', completed: false},
    {task: 'Eat a pizza', completed: false},
    {task: 'Bike on a beach', completed: false}
    ];


    $scope.$watch('todos', function() {
        var anyComplete = false;
        $scope.todos.forEach(function(todo){
           if (todo.completed){
               anyComplete = true;
               return;
           }
        });
        $scope.isDisabled = !anyComplete;
    });        // Watch says watch.  Apply says I made a chg Angular no knows about, apply that

$scope.delete = function(index) {
    $scope.todo.splice(index, 1);
};

    $scope.add = function() {
        $scope.todos.push({task: $scope.newTodo, completed: false});
        $scope.newTodo="";
    };

    $scope.clearFinished = function () {
        $scope.todos = $scope.todos.filter(function(todo) {     // More discrete way
            return !todo.completed;
        });

        var todo, ndx, newTodos=[];
        for(ndx=0; ndx < $scope.todos.length;ndx += 1){        // Less discrete, capable of fencepost error
            todo = $scope.todos[ndx];
            if (todo.completed) {
                newTodos.push(todo);
            }
        }
        $scope.todos = newTodos;
    };

}]);

