(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        
        $scope.addRoom = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/new-room.html',
                size: 'sm',
                controller: 'NewRoomCtrl'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();