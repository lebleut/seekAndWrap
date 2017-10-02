# seekAndWrap
`seekAndWrap` is a jQuery plugin to find a text in a given element and wrap it with a tag and attributes in parameter in order to use it in useful cases.

Example :
```html
<div id="container">
  Html and JS are the best languages ever...
</div>
```

```js
$("#container").seekAndWrap({
	"search" : "js",
	"tag" : "span",
	"class" : "keyword",
	"attribs" : [
		{"title" : "JavaScript"},
		{"data-desc" : "JavaScript is a client side language."}
	],
	});
```

That way you will get :
```html
<div id="container">
  Html and <span class="keyword" title="JavaScript" "data-desc"="JavaScript is a client side language.">JS</span> are the best languages ever...
</div>
```