namespace BookTrackerProject.Controllers {
    export class OwnHomeController {
        public BookResource;
        public books;

        public getBooks() {
            this.books = this.BookResource.query();
        }

        constructor(private $resource: angular.resource.IResourceService) {
            this.BookResource = $resource('/api/books');
            this.getBooks();
        }
    }

    //Controller for adding books
    export class AddBookController {
        public BookResource;
        public book;
        public file;

        public save() {
            this.BookResource.save(this.book).$promise.then(() => {
                console.log(this.book);
                this.book = null;
                this.$state.go('ownBook');

            });
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
            this.book['image'] = this.file.url;
            this.$scope.$apply();
        }


        constructor(private $resource: angular.resource.IResourceService,
            private $state: ng.ui.IStateService,
            private $scope: ng.IScope,
            private filepickerService) {
            this.BookResource = this.$resource('/api/books');
        }
    }

    //Controller for updating books
    export class UpdateBookController {
        public BookResource;
        public book;

        public getBook(id: number) {
            this.book = this.BookResource.get({ id: id })
        }

        public saveBook() {
            this.BookResource.save(this.book).$promise.then(() => {
                this.book = null;
                this.$state.go('ownBook');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.BookResource = this.$resource('/api/books/:id');
            this.getBook($stateParams['id'])
        }

    }

    //Deleting books Controller
    export class DeleteBookController {
        public BookResource;
        public book;

        public getBook(id: number) {
            this.book = this.BookResource.get({ id: id })
        }

        public deleteBook() {
            this.BookResource.delete({ id: this.book.id }).$promise.then(() => {
                this.book = null;
                this.$state.go('ownBook');
            })
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {

            this.BookResource = this.$resource('/api/books/:id');
            this.getBook($stateParams['id'])
        }

    }


    //--------------Line Break-------------------------------------------------------------------------------------------

}