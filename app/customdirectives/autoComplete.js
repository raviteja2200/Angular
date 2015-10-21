app.directive('customAutoComplete',[function(){
	return{
		restrict:"A",
		link:function(scope,element,attrs){
			/*console.log(element);*/
			      var availableTags = [
			            "ActionScript",
			            "AppleScript",
			            "Asp",
			            "BASIC",
			            "C",
			            "C++",
			            "Clojure",
			            "COBOL",
			            "ColdFusion",
			            "Erlang",
			            "Fortran",
			            "Groovy",
			            "Haskell",
			            "Java",
			            "JavaScript",
			            "Lisp",
			            "Perl",
			            "PHP",
			            "Python",
			            "Ruby",
			            "Scala",
			            "Scheme"
			          ];
			          	console.log("hello i am in directive");
			            element.autocomplete({
				     	source: availableTags
				    });
		}
	}
}])