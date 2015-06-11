$(document).ready(function() {

  SC.initialize({
    client_id: "2ebf02e8445da1990e55df28295ec4f3",
   redirect_uri: "http://connect.soundcloud.com/examples/callback.html"
  });

  $("#connect").on("click", function(){
    SC.connect(function(){
      SC.get("/me", function(me){
        $("#username").text(me.username);
        $("#description").val(me.description);
      });
   });
  });

  $("#update").on("click", function(){
    SC.put("/me", {user: {description: $("#description").val()}}, function(response, error){
      if(error){
        alert("Some error occured: " + error.message);
      }else{
        alert("Profile description updated!");
      }
    });
  });
});
