(function() {
    function NewUserCtrl($scope, Room, $cookies, $uibModalInstance) {
        
        $scope.setNewUser = function() {
            $cookies.put('blocChatCurrentUser', $scope.username);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('NewUserCtrl', ['$scope', 'Room', '$cookies', '$uibModalInstance', NewUserCtrl]);
})();