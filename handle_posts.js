//function that handles is called when user submits data into form which then passes data to server

handle_posts=function(posted){
  console.log('handling',posted);
  var url = {};
  url.address=posted;
  url=JSON.stringify(url);
  if(posted !==''){
    $.ajax({
      url: "http://api.sportsdatallc.org/mlb-t3/schedule/2013.xml",
      dataType: 'jsonp',
        data: {
      //   // enter your developer api key here
          api_key: "3ad9uep6u6vhhjmwsukekyzd",
         // header: 'Access-Control-Allow-Origin: *',
      //   // the type of data you're expecting back from the api
          _accept: "application/xml",
      // },
        },
      success: function(data) {
        $('body').append(data);
      },
      error: function() {
        console.log('error');
      }
    });
  };
};





// $.ajax({
//   url: "http://api.sportsdatallc.org/mlb-t3/schedule/2013.xml?api_key=3ad9uep6u6vhhjmwsukekyzd",
//   data: {
//     // enter your developer api key here
//     //apikey: "{api key}",
//     // the type of data you're expecting back from the api
//     //_accept: "application/json"
//   },
//   dataType: "jsonp",
//   success: function(data) {
//     // create an unordered list of headlines
//     var ul = $('<ul/>');
//     $.each(data.headlines, function() {
//       var li = $('<li/>').text(this.headline);
//       ul.append(li);
//     });
//     // append this list to the document body
//     $('body').append(ul);
//   },
//   error: function() {
//      // handle the error
//   }
// });