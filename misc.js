

// server=12


// handle_posts=function(posted){
//   console.log('handling',posted);
//   var url = {};
//   url.address=posted;
//   url=JSON.stringify(url);
//   if(posted !==''){
//     $.ajax({
//       url: "http://api.sportsdatallc.org/mlb-t3/schedule/2013.xml",
//         data: {
//       //   // enter your developer api key here
//           api_key: "3ad9uep6u6vhhjmwsukekyzd",
//       //   // the type of data you're expecting back from the api
//           _accept: "application/json",
//       // },
//           dataType: "jsonp",
//         },
//       success: function(data) {
//         // create an unordered list of headlines
//         var ul = $('<ul/>');
//         $.each(data.headlines, function() {
//           var li = $('<li/>').text(this.headline);
//           ul.append(li);
//         });
//         // append this list to the document body
//         $('body').append(ul);
//       },
//       error: function() {
//         console.log('error');
//       }
//     });
//   };
// };
//function that handles is called when user submits data into form which then passes data to server

// handle_posts=function(posted){
//   console.log('handling',posted);
//   var url = {};
//   url.address=posted;
//   url=JSON.stringify(url);
//   if(posted !==''){
//     $.ajax({
//       url: "http://api.sportsdatallc.org/mlb-t3/schedule/2013.xml",
//         data: {
//       //   // enter your developer api key here
//           api_key: "3ad9uep6u6vhhjmwsukekyzd",
//          // header: 'Access-Control-Allow-Origin: *',
//       //   // the type of data you're expecting back from the api
//           //_accept: "application/json",
//       // },
//           dataType: "jsonp",
//         },
//       success: function(data) {
//         // create an unordered list of headlines
//         var ul = $('<ul/>');
//         $.each(data.headlines, function() {
//           var li = $('<li/>').text(this.headline);
//           ul.append(li);
//         });
//         // append this list to the document body
//         $('body').append(ul);
//       },
//       error: function() {
//         console.log('error');
//       }
//     });
//   };
// };





var serverurl="http://127.0.0.1:8080";

handle_posts=function(posted){
  
  var url = {};
  url.address=posted;
  url=JSON.stringify(url);
  if(posted !==''){
    $.ajax(serverurl, {
      'content-type': 'application/json',
      type: 'POST',
      data: url,
      success: function(data){

        console.log('Success submitted to server.', data);
        dishes=JSON.parse(data);

      },
      error: function(data) {
        console.log('Ajax POST request failed');
      }
    });

  }
};