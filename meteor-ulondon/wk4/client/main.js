/////
// configs
/////
// accounts ui config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
}); // end accounts ui

// sAlerts config
sAlert.config({
  effect: 'jelly',
  position: 'top',
  timeout: 5000,
  html: false,
  onRouteClose: true,
  stack: true,
  offset: '70px',
  beep: false
}); // end accounts ui config

// BlazeLayout config
BlazeLayout.setRoot('.main-container');

/////
// routing
/////
// main route
FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("mainLayout",
    {
      top: "website_header",
      form: "website_form",
      list: "website_list"
    });
  }
}); // end main route

// site detail route
FlowRouter.route('/site/:siteID', {
  action: function(params) {
    console.log('site detail params', params);
    BlazeLayout.render('detailLayout',
    {
      top: 'website_header',
      detail: 'site_detail',
      form: 'comment_form',
      comments: 'comments_list'
    });
  }
}); // end site detail route

/////
// template helpers
/////

// helper function that returns all available websites
Template.website_list.helpers({
  websites:function(){
    return Websites.find({}, {sort: {upVote: -1, title: 1}});
  }
});

// helper function to return a single website
Template.site_detail.helpers({
  siteDetail: function(){
    var siteID = FlowRouter.getParam('siteID');
    console.log('detail helper:', Websites.findOne({_id: siteID}));
    return Websites.findOne({_id: siteID});
  }
});

// helper function to return a list of comments
Template.comments_list.helpers({
  comments: function() {
    var siteID = FlowRouter.getParam('siteID');
    var site = Websites.findOne({_id: siteID});
    return site.comments;
  }
});

/////
// template events
/////

Template.website_item.events({
  "click .js-upvote":function(event){
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    console.log("Up voting website with id "+ website_id);
    // add a vote to a website!
    // only logged in users can vote
    if (Meteor.user()) {
      Websites.update(
        {_id: website_id},
        {$inc: {upVote: 1}}
      );
      // let user know site was added
      sAlert.success('Your vote was registered');
    }
    else {
      console.log("Vote not added, user not logged in");
      // alert user they must be logged in
      sAlert.error('Sorry, you must be logged in to vote on a website');
    }

    return false;// prevent the button from reloading the page
  },
  "click .js-downvote":function(event){

    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;

    console.log("Down voting website with id "+ website_id);

    // put the code in here to remove a vote from a website!
    // only logged in users can vote
    if (Meteor.user()) {
      Websites.update(
        {_id: website_id},
        {$inc: {downVote: 1}}
      );
      // let user know site was added
      sAlert.success('Your vote was registered');
    }
    else {
      console.log("Vote not added, user not logged in");
      // alert user they must be logged in
      sAlert.error('Sorry, you must be logged in to vote on a website');
    }

    return false;// prevent the button from reloading the page
  }
})

Template.website_form.events({
  "click .js-toggle-website-form":function(event){
    $("#website_form").toggle('slow');
  },
  "submit .js-save-website-form":function(event, template){
    // get the data out of the form:
    var title = event.target.title.value;
    var url = event.target.url.value;
    var description = event.target.description.value;
    console.log("The url they entered is: "+ url);

    // website saving code
    if (Meteor.user()) {
      Websites.insert({
        title: title,
        url: url,
        description: description,
        upVote: 0,
        downVote: 0,
        comments: [],
        createdOn: new Date()
      });
      // let user know site was added
      sAlert.success("Congrats! Your site '" + title + "' was successfully added");
      // clear the form
      template.find("form").reset();
      // add toggle it back closed
      $("#website_form").toggle('slow');
    }
    else {
      console.log("Site not added, user not logged in");
      // alert user they must be logged in
      sAlert.error('Sorry, you must be logged in to add a website');
    }

    return false;// stop the form submit from reloading the page

  }
});

Template.comment_form.events({
  "click .js-toggle-comment-form":function(event){
    $("#comment-form").toggle('slow');
  },
  "submit .js-save-comment-form":function(event, template){
    // get the data out of the form:
    console.log('comment event:', this);
    var siteID = FlowRouter.getParam('siteID');
    var comment = event.target.comment.value;
    var userName = Meteor.user().username;
    console.log('comment site id', siteID);
    console.log("The comment they entered is: "+ comment);
    console.log('Comment user name:', userName);

    // website saving code
    if (Meteor.user()) {
      Websites.update(
        {_id: siteID},
        {$push: {comments: {'comment': comment,
          'userName': userName,
          'createdOn': new Date()
        }
      }},
      );
      // let user know site was added
      sAlert.success("Thanks! Your comment was successfully added");
      // clear the form
      template.find("form").reset();
      // add toggle it back closed
      $("#comment-form").toggle('slow');
    }
    else {
      console.log("Site not added, user not logged in");
      // alert user they must be logged in
      sAlert.error('Sorry, you must be logged in to add a website');
    }

    return false;// stop the form submit from reloading the page

  }
});
