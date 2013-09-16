var app = angular.module('PlaceholderApp', []);

function Main($scope) {
    $scope.xSize = 400;
    $scope.ySize = 200;
    $scope.filename = 'filename';
    $scope.filetype = '.jpg';
    $scope.placeholderText = '';
    $scope.squareDimChange = function() {
        $scope.ySize = $scope.xSize;
    };
}
