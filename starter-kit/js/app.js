var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});

App.Person = Em.Object.extend({
  firstName: null,
  lastName: null,
  fullName: function() {
    return this.get('firstName') +
           " " + this.get('lastName');
  }.property('firstName', 'lastName')
});
 
App.peopleController = Em.ArrayController.create({
  content: [],
  init: function(){
    var person = App.Person.create({
      firstName: "Allen",//$("#txtFirstName").val(),
      lastName: "Hsu"//$("#txtLastName").val()
    });
    this.pushObject(person); 
  }
});

$(function(){

  $("#btnCreate").on("click", function(){
    App.peopleController.content[0].set('firstName', $("#txtFirstName").val());
    App.peopleController.content[0].set('lastName', $("#txtLastName").val());
    //$("#txtFullName").val(person.get("fullName"));
  });

});

