namespace BookTrackerProject {

    angular.module('BookTrackerProject', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider
    ) => {
        filepickerProvider.setKey('ARYO9iYpQRv2RouBvrga5z');


        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: BookTrackerProject.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('userPage', {
                url: '/userPage',
                templateUrl: '/ngApp/views/userPage.html',
                controller: BookTrackerProject.Controllers.SecretController,
                controllerAs: 'controller'
            })

            //------------Line Break-----------------------------------------------------------------------------


            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: BookTrackerProject.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: BookTrackerProject.Controllers.AboutController,
                controllerAs: 'controller'
            })


            //-------Line Break---------------------------------------------------------------------------------


            .state('ownBook', {
                url: '/ownBook',
                templateUrl: 'ngApp/views/own/ownBook.html',
                controller: BookTrackerProject.Controllers.OwnHomeController,
                controllerAs: 'controller'
            })
            .state('addBook', {
                url: '/addBook',
                templateUrl: '/ngApp/views/own/addBook.html',
                controller: BookTrackerProject.Controllers.AddBookController,
                controllerAs: 'controller'
            })
            .state('updateBook', {
                url: '/updateBook/:id',
                templateUrl: 'ngApp/views/own/updateBook.html',
                controller: BookTrackerProject.Controllers.UpdateBookController,
                controllerAs: 'controller'
            })
            .state('deleteBook', {
                url: '/deleteBook/:id',
                templateUrl: '/ngApp/views/own/deleteBook.html',
                controller: BookTrackerProject.Controllers.DeleteBookController,
                controllerAs: 'controller'
            })

            //----------Line Break-----------------------------------------------------------------


            .state('wishBook', {
                url: '/wishBook',
                templateUrl: '/ngApp/views/wishlist/wishBook.html',
                controller: BookTrackerProject.Controllers.WishHomeController,
                controllerAs: 'controller'
            })
            .state('addWishBook', {
                url: '/addWishBook',
                templateUrl: '/ngApp/views/wishlist/addWishBook.html',
                controller: BookTrackerProject.Controllers.AddWishBookController,
                controllerAs: 'controller'
            })
            .state('updateWishBook', {
                url: '/updateWishBook/:id',
                templateUrl: '/ngApp/views/wishlist/updateWishBook.html',
                controller: BookTrackerProject.Controllers.UpdateWishBookController,
                controllerAs: 'controller'
            })
            .state('deleteWishBook', {
                url: '/deleteWishBook/:id',
                templateUrl: '/ngApp/views/wishlist/deleteWishBook.html',
                controller: BookTrackerProject.Controllers.DeleteWishBookController,
                controllerAs: 'controller'
            })

            //---------------Line Break----------------------------------------------------------------------

            .state('recBooks', {
                url: '/recBooks',
                templateUrl: '/ngApp/views/recommend/recBooks.html',
                controller: BookTrackerProject.Controllers.RecommendHomeController,
                controllerAs: 'controller'
            })
            .state('addRecBook', {
                url: '/addRecBook',
                templateUrl: '/ngApp/views/recommend/addRecBook.html',
                controller: BookTrackerProject.Controllers.AddRecBookController,
                controllerAs: 'controller'
            })
            .state('updateRecBook', {
                url: '/updateRecBook/:id',
                templateUrl: '/ngApp/views/recommend/updateRecBook.html',
                controller: BookTrackerProject.Controllers.UpdateRecBookController,
                controllerAs: 'controller'
            })
            .state('deleteRecBook', {
                url: '/deleteRecBook/:id',
                templateUrl: '/ngApp/views/recommend/deleteRecBook.html',
                controller: BookTrackerProject.Controllers.DeleteRecBookController,
                controllerAs: 'controller'
            })


            //---------------Line Break----------------------------------------------------------------------


            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('BookTrackerProject').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('BookTrackerProject').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}


            //.state('login', {
            //    url: '/login',
            //    templateUrl: '/ngApp/views/login.html',
            //    controller: BookTrackerProject.Controllers.LoginController,
            //    controllerAs: 'controller'
            //})
            //.state('externalRegister', {
            //    url: '/externalRegister',
            //    templateUrl: '/ngApp/views/externalRegister.html',
            //    controller: BookTrackerProject.Controllers.ExternalRegisterController,
            //    controllerAs: 'controller'
            //}) 
