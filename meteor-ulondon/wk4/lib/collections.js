Websites = new Mongo.Collection("websites");

// index for use by easy search
WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['url', 'title', 'description'],
  limit: 5,
  engine: new EasySearch.Minimongo()
});
