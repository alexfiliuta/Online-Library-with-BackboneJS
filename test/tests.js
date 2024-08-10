describe("models/Book", function() {

    //When
    describe("When building a new model", function() {
        //Then
        it("it builds the REST endpoint URL using the ID property", function() {
            var book = new app.models.Book({id: 'ID'});

            //the URL should now be: api/book_ID.json
            expect(book.url()).to.equal("api/book_ID.json");
        });
    });

});

describe("models/Books", function() {
    it("it builds the REST endpoint with the categoryId passed in the constructor option 'catId'", function() {
        var books = new app.models.Books(null, {catId: "categoryId"});
        expect(books.url()).to.equal('api/books_categoryId.json');
    });
});

describe("views/BookDetail", function() {
    describe("When initializing", function() {
        it("It re-renders when the model changes", function() {
            var model = new app.models.Book({id: "id1"});

            var render = sinon.stub(app.views.BookDetail.prototype, "render");
            var view = new app.views.BookDetail({
                model: model
            });

            model.set("property", "value");

            expect(render.called).to.be.true;

            app.views.BookDetail.prototype.render.restore();
        });
    });

    describe("When rendering", function() {

        var modelTemplate = {
                "volumeInfo": {
                  "title": "Sport",
                  "subtitle": "A Critical Sociology",
                  "authors": [
                   "Richard Giulianotti"
                  ],
                  //"publisher": "Polity",
                  "publishedDate": "2005",
                  "description": "In this lively new book, Richard Giulianotti provides a critical sociological interpretation of modern sport. As global festivals such as the Olympic games and football's World Cup demonstrate, sport's social, political, economic and cultural significance is becoming increasingly apparent across the world. Its popularity alone means that sociologists cannot ignore social theory.",
                  "imageLinks": {
                   "smallThumbnail": "http://bks5.books.google.co.uk/books?id=-fGmwe2AVWIC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70vZEnGOiIL0VVkl6vQCNhpoOXvNE9O00SYSO1bDKhqmoL0IuvH-JbGrtR8neBXF6lX5fn3Rgw0V5WkOKb-y7yX0UmOouniZcTGrf_VRkgNHBQfyFY&source=gbs_api",
                   "thumbnail": "http://bks5.books.google.co.uk/books?id=-fGmwe2AVWIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73AE09Yy-8kht26JEYWk3wSTwh68lxELYfC-3NBbWQI8q2f2XmK5K5oQ38EQ0-7b90aiy_QaY5uZo1Ka1Oy7HlSi583OHfP2IhLlanw9Z8BF6UElFA&source=gbs_api",
                   "small": "http://bks5.books.google.co.uk/books?id=-fGmwe2AVWIC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71kS08aeJjizIerVYobNjI3X9tHKP-oqsYNOIs6KztEknC7zz5QlhlwKxYAKZ7iKTBuJz2SA7d3jjHNC3EqSKSTc_sVAyCUylWM5KWBu6nqnQ_tvGg&source=gbs_api"
                  }
                 }
                };

        it("it doesn't display the publisher if not present in the JSON data", function() {
            var model = new app.models.Book(modelTemplate);
            var view = new app.views.BookDetail({
                model: model
            });

            view.render();

            expect(view.$('[data-id=publisher]').html()).to.equal("");
        });

        it("it renders the author and the publisher date", function() {
            var model = new app.models.Book(modelTemplate);
            var view = new app.views.BookDetail({
                model: model
            });
            view.render();

            expect(view.$('[data-id=published-authors]').text()).to.equal("Richard Giulianotti - 2005");
        });
    });
});

describe("routers/Router", function() {

    var router;

    beforeEach(function() {
        var MockRouter = app.routers.Router.extend({
            home: sinon.spy(),
            category: sinon.spy(),
            book: sinon.spy(),
            unknown: sinon.spy()
        });

        router = new MockRouter();

        if(Backbone.History.started !== true) {
            Backbone.history.start();
        }
    });

    afterEach(function() {
        router.navigate("", {trigger:true});
    });

    it('routes to home if no hash fragment is present', function() {
        router.navigate("", {trigger:true});
        expect(router.home.called).to.be.true;
    });

    it('routes to category if hash fragment contains "category/<catid>"', function() {
        router.navigate("category/categoryId", {trigger:true});
        expect(router.category.called).to.be.true;

    });

    it('routes to book if hash fragment contains "category/id/book/id"', function() {
        router.navigate("category/id/book/id", {trigger:true});
        expect(router.book.called).to.be.true;
    });


    it('routes to uknown if has fragment is not recognized', function() {
        router.navigate("something/different", {trigger:true});
        expect(router.unknown.called).to.be.true;
    });
});
