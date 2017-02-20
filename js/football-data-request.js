$.ajax({
  headers: { 'X-Auth-Token': 'e048b2b3605546d08267e1ad3b41c199' },
  url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  // do something with the response, e.g. isolate the id of a linked resource        
  var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
  var res = regex.exec(response.fixtures[0]._links.competition.href);
  var teamId = res[1];
  console.log(teamId);
}); 