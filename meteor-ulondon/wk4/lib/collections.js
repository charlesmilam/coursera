Websites = new Mongo.Collection("websites");

// index for use by easy search
WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['url', 'title', 'description'],
  engine: new EasySearch.Minimongo()
});
