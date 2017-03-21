(function() {
    function NewRoomCtrl($scope, Room, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };
        
        $scope.create = function(name) {
            Room.add({name: name});
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('NewRoomCtrl', ['$scope', 'Room', '$uibModalInstance', NewRoomCtrl]);
})();