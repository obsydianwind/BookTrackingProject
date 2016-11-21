namespace BookTrackerProject.Controllers {

    export class HomeController {
        public loginUser;
        public validationMessages;

        public login() {
            this.accountService.login(this.loginUser).then(() => {
                this.$location.path('/ownBook');
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        constructor(private accountService: BookTrackerProject.Services.AccountService, private $location: ng.ILocationService) { }
    }

    //-------------Line Break-------------------------------------------------------------------------------------------

  

    export class WishHomeController {
        public WishBookResource;
        public wishes;

        public getWishBooks() {
            this.wishes = this.WishBookResource.query();
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.WishBookResource = $resource('/api/wishes');
            this.getWishBooks();
        }

    }


    //add wish book controller
    export class AddWishBookController {
        public WishBookResource;
        public wish;
        public file;

        public save() {
            this.WishBookResource.save(this.wish).$promise.then(() => {
                this.wish = null;
                this.$state.go('wishBook');
            })
        }


        public pickFile() {
            this.filepickerService.pick(
                {
                    mimetype: "image/*",
                    imageQuality: 50
                },
                this.fileUploaded.bind(this));

        }

        public fileUploaded(file) {
            this.file = file;
            this.wish['image'] = this.file.url;
            this.$scope.$apply();
        }


        constructor(private $resource: angular.resource.IResourceService,
            private $state: ng.ui.IStateService,
            private $scope: ng.IScope,
            private filepickerService, ) {
            this.WishBookResource = this.$resource('/api/wishes');
        }
    }

    //Update wish book controller
    export class UpdateWishBookController {
        public WishBookResource;
        public wish;

        //Getting a wishbook for editing
        public getWishBook(id: number) {
            this.wish = this.WishBookResource.get({ id: id })
        }

        //post(save) the wishbook after making changes
        public saveWishBook() {
            this.WishBookResource.save(this.wish).$promise.then(() => {
                this.wish = null;
                this.$state.go('wishBook');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
        private $state: ng.ui.IStateService) {
            this.WishBookResource = this.$resource('/api/wishBook/:id');
            this.getWishBook($stateParams['id'])
        }
    }

    //Delete wishbook controller
    export class DeleteWishBookController {
        public WishBookResource;
        public wish;

        public getWishBook(id: number) {
            this.wish = this.WishBookResource.get({ id: id })

        }

        public deleteWishBook() {
            this.WishBookResource.delete({ id: this.wish.id }).$promise.then(() => {
                console.log(this.wish);
                this.wish = null;
                this.$state.go('wishBook');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.WishBookResource = this.$resource('/api/wishes/:id');
            this.getWishBook($stateParams['id'])
        }
    }


    //--------------Line Break-------------------------------------------------------------------------------------------
    


    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
