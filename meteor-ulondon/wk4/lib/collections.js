Websites = new Mongo.Collection("websites");

// index for use by easy search
WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['createdBy', 'title', 'description'],
  engine: new EasySearch.Minimongo({
    sort: function()
      {
        return {'upVote': -1, 'title': 1 };
      }
  })
});
