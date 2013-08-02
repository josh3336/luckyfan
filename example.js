// Example JSONP request with jQuery
$.ajax({
  url: "http://api.sportsdatallc.org/mlb-t3/schedule/2013.xml?api_key=3ad9uep6u6vhhjmwsukekyzd",
  data: {
    // enter your developer api key here
    //apikey: "{api key}",
    // the type of data you're expecting back from the api
    //_accept: "application/json"
  },
  dataType: "jsonp",
  success: function(data) {
    // create an unordered list of headlines
    var ul = $('<ul/>');
    $.each(data.headlines, function() {
      var li = $('<li/>').text(this.headline);
      ul.append(li);
    });
    // append this list to the document body
    $('body').append(ul);
  },
  error: function() {
     // handle the error
  }
});