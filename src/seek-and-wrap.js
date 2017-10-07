/**
 * seekAndWrap v 0.1
 * @author Jamel Eddine Zarga http://www.tooltipy.com
 *
 * jQuery Plugin to find a text in a given element and wrap it with a tag and attributes in parameter in order to use it in useful cases.
 *
 */

$.fn.seekAndWrap = function( opt ){
  var defaut = {
    "search": "",
    "attribs":null,
    "tag":"div",
    "class":""
  };

  var params = $.extend(defaut, opt);
  
  function wrapIt( elem, params ){
    elem.contents().each(function(){
      if( this.nodeType == 3 ){
        var content = $(this).text();

        var before_search = '^|\\W'; // ^|\W : start OR non-word character
        var after_search = '$|\\W';  // $|\\W : end OR non-word character

        var pattern = new RegExp('('+before_search+')('+params.search+')('+after_search+')','ig');

        var new_elem;

        var replacer = function(match, p1, p2, p3, offset, string){
          // p1 group before the word
          // p2 the word needed
          // p3 group after the word

          new_elem = $("<"+params.tag+" />");

          new_elem.text( p2 );

          if( params.attribs != null && Array.isArray(params.attribs) ){
            params.attribs.forEach(function(attr, index){
              if( attr.name != "" ){
                return new_elem.attr(attr.name, attr.value);
              }
            });

          }

          if(params.class != ""){
            new_elem.addClass(params.class);
          }

          return p1+new_elem.prop('outerHTML')+p3;
        }

        content = content.replace(pattern, replacer);

        $(this).replaceWith(content);

      }else{
        wrapIt( $(this), params );
      }

    });
  }
  
  return this.each(function(index){
    if( "" === params.search ){
      console.log("No param yet");
      return false;
    }

    wrapIt($(this), params );

  });


}
