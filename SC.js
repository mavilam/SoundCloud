$(document).ready(function() {

  SC.initialize({
    client_id: "c202b469a633a7a5b15c9e10b5272b78",
   redirect_uri: "http://connect.soundcloud.com/examples/callback.html"
  });

  $("#connect").live("click", function(){
    SC.connect(function(){
      SC.get("/me", function(me){
        $("#username").text(me.username);
        $("#description").val(me.description);
      });
   });
  });

  $("#update").live("click", function(){
    SC.put("/me", {user: {description: $("#description").val()}}, function(response, error){
      if(error){
        alert("Some error occured: " + error.message);
      }else{
        alert("Profile description updated!");
      }
    });
  });
});
