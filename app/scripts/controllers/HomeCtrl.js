(function() {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        
        $scope.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/new-room.html',
                size: 'sm',
                controller: 'NewRoomCtrl'
            });
        };
        
        $scope.activeRoom = {};
        $scope.activeRoomMessages = [];
        
        $scope.selectRoom = function(room) {
            $scope.activeRoom = room;
            $scope.activeRoomMessages = Message.getByRoomId(room.$id);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();