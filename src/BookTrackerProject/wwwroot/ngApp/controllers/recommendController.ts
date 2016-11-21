namespace BookTrackerProject.Controllers {


    export class RecommendHomeController {
        public RecResource;
        public recommends;

        public getRecBook() {
            this.recommends = this.RecResource.query();
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.RecResource = $resource('/api/recommends');
            this.getRecBook();
        }

    }

    //Adding book
    export class AddRecBookController {
        public RecResource;
        public recommend;

        public saveRecBook() {
            this.RecResource.save(this.recommend).$promise.then(() => {
                this.recommend = null;
                this.$state.go('recBooks');
            });
        }

        constructor(private $resource: angular.resource.IResourceService, private $state: ng.ui.IStateService) {
            this.RecResource = this.$resource('/api/recommends');

        }
    }

    //Update a recommended book
    export class UpdateRecBookController {
        public RecResource;
        public recommend;

        //Get a book by id
        public getRecBook(id: number) {
            this.recommend = this.RecResource.get({ id: id })
        }

        //Save the movie after the changes have been made
        public saveRecBook() {
            this.RecResource.save(this.recommend).$promise.then(() => {
                this.recommend = null;
                this.$state.go('recBooks');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.RecResource = this.$resource('/api/recommends/:id');
            this.getRecBook($stateParams['id']);
        }

    }


    //Deleting a book from recommended list
    export class DeleteRecBookController {
        public RecResource;
        public recommend;

        public getRecBook(id: number) {
            this.recommend = this.RecResource.get({ id: id })
        }

        public deleteRecBook() {
            this.RecResource.delete({ id: this.recommend.id }).$promise.then(() => {
                this.recommend = null;
                this.$state.go('recBooks')
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.RecResource = this.$resource('/api/recommends/:id');
            this.getRecBook($stateParams['id']);
        }
    }



}
//--------------Line Break-------------------------------------------------------------------------------------------