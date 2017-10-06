
$("body").seekAndWrap({
  "tag":"span",
  "class":"keyword",
  "search":"web",
  "attribs":[
    {
      "name" : "data-tooltip",
      "value" : "WWW : World Wide Web"
    },
    {
      "name" : "title",
      "value" : "test"
    }
  ]

});

$("body").seekAndWrap({
  "tag":"div",
  "class":"ttp",
  "search":"js",
  "attribs":[
    {
      "name" : "data-tooltip",
      "value" : "JavaScript"
    }
  ]

});

// Now use the new state to create jquery tooltips
$( document ).tooltip({
  "items":".keyword, .ttp",
  "content": function(){
    return $(this).attr("data-tooltip");
  },
  "track": true
});
