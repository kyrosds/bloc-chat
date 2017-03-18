(function() {
    function NewRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        $scope.create = function() {
            Room.add($scope.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$scope', 'Room', '$uibModalInstance', NewRoomCtrl]);
})();