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

/////
// template helpers
/////

// helper function that returns all available websites
Template.website_list.helpers({
  websites:function(){
    return Websites.find({});
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
        createdOn:new Date()
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
