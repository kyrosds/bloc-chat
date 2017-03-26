(function() {
    function HomeCtrl($scope, Room, Message, $uibModal, $cookies) {
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
        
        $scope.sendMessage = function(newMessage) {
            Message.send(
                $scope.newMessage,
                $scope.activeRoom.$id,
                $cookies.get('blocChatCurrentUser'),
                firebase.database.ServerValue.TIMESTAMP
            );
            $scope.newMessage = '';
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();