$(document).ready(function() {

  SC.initialize({
    client_id: "2ebf02e8445da1990e55df28295ec4f3",
   redirect_uri: "http://mavilam.github.io/SoundCloud/redirect.html"
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

  var track_url = 'http://soundcloud.com/forss/flickermood';
  SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
    console.log('oEmbed response: ' + oEmbed);
  });

});
