(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[5],{286:function(e,n,t){"use strict";t.r(n);t(376),t(188),t(216),t(217),t(212),t(219),t(241),t(220),t(223);var i=t(111);for(var s in i)"default"!==s&&function(e){t.d(n,e,(function(){return i[e]}))}(s)},364:function(e,n,t){"use strict";t.r(n);t(251),t(365),t(227),t(366),t(371);var i=t(286);for(var s in i)"default"!==s&&function(e){t.d(n,e,(function(){return i[e]}))}(s)},365:function(e,n,t){"use strict";t(111);var i=monaco.Emitter,s=function(){function e(e,n,t){this._onDidChange=new i,this._languageId=e,this.setDiagnosticsOptions(n),this.setModeConfiguration(t)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setModeConfiguration=function(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)},e}(),o={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"}},a={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},r=new s("css",o,a),l=new s("scss",o,a),c=new s("less",o,a);function u(){return t.e(8).then(t.bind(null,373))}monaco.languages.css={cssDefaults:r,lessDefaults:c,scssDefaults:l},monaco.languages.onLanguage("less",(function(){u().then((function(e){return e.setupMode(c)}))})),monaco.languages.onLanguage("scss",(function(){u().then((function(e){return e.setupMode(l)}))})),monaco.languages.onLanguage("css",(function(){u().then((function(e){return e.setupMode(r)}))}))},366:function(e,n,t){"use strict";t(111);var i=monaco.Emitter,s=function(){function e(e,n,t){this._onDidChange=new i,this._languageId=e,this.setOptions(n),this.setModeConfiguration(t)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!0,configurable:!0}),e.prototype.setOptions=function(e){this._options=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setModeConfiguration=function(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)},e}(),o={tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:null,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},a={format:o,suggest:{html5:!0}},r={format:o,suggest:{html5:!0,razor:!0}};function l(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===c,documentFormattingEdits:e===c,documentRangeFormattingEdits:e===c}}var c="html",u=new s(c,{format:o,suggest:{html5:!0,angular1:!0,ionic:!0}},l(c)),d=new s("handlebars",a,l("handlebars")),p=new s("razor",r,l("razor"));function f(){return t.e(9).then(t.bind(null,374))}monaco.languages.html={htmlDefaults:u,razorDefaults:p,handlebarDefaults:d},monaco.languages.onLanguage(c,(function(){f().then((function(e){return e.setupMode(u)}))})),monaco.languages.onLanguage("handlebars",(function(){f().then((function(e){return e.setupMode(d)}))})),monaco.languages.onLanguage("razor",(function(){f().then((function(e){return e.setupMode(p)}))}))},371:function(e,n,t){"use strict";t(111);var i=t(68);Object(i.a)({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:function(){return t.e(11).then(t.bind(null,379))}}),Object(i.a)({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:function(){return t.e(12).then(t.bind(null,380))}}),Object(i.a)({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:function(){return t.e(13).then(t.bind(null,381))}}),Object(i.a)({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:function(){return t.e(14).then(t.bind(null,382))}}),Object(i.a)({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:function(){return t.e(15).then(t.bind(null,383))}}),Object(i.a)({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:function(){return t.e(16).then(t.bind(null,384))}}),Object(i.a)({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:function(){return t.e(17).then(t.bind(null,385))}}),Object(i.a)({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:function(){return t.e(1).then(t.bind(null,386))}}),Object(i.a)({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:function(){return t.e(1).then(t.bind(null,386))}}),Object(i.a)({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:function(){return t.e(18).then(t.bind(null,387))}}),Object(i.a)({id:"csp",extensions:[],aliases:["CSP","csp"],loader:function(){return t.e(19).then(t.bind(null,388))}}),Object(i.a)({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:function(){return t.e(20).then(t.bind(null,389))}}),Object(i.a)({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:function(){return t.e(21).then(t.bind(null,390))}}),Object(i.a)({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:function(){return t.e(22).then(t.bind(null,391))}}),Object(i.a)({id:"go",extensions:[".go"],aliases:["Go"],loader:function(){return t.e(23).then(t.bind(null,392))}}),Object(i.a)({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:function(){return t.e(24).then(t.bind(null,393))}}),Object(i.a)({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars"],mimetypes:["text/x-handlebars-template"],loader:function(){return t.e(25).then(t.bind(null,394))}}),Object(i.a)({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:function(){return t.e(26).then(t.bind(null,395))}}),Object(i.a)({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:function(){return t.e(27).then(t.bind(null,396))}}),Object(i.a)({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:function(){return t.e(28).then(t.bind(null,397))}}),Object(i.a)({id:"javascript",extensions:[".js",".es6",".jsx"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:function(){return t.e(7).then(t.bind(null,398))}}),Object(i.a)({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:function(){return t.e(29).then(t.bind(null,399))}}),Object(i.a)({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:function(){return t.e(30).then(t.bind(null,400))}}),Object(i.a)({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:function(){return t.e(31).then(t.bind(null,401))}});t(229);Object(i.a)({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:function(){return t.e(33).then(t.bind(null,402))}}),Object(i.a)({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:function(){return t.e(34).then(t.bind(null,403))}}),Object(i.a)({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:function(){return t.e(35).then(t.bind(null,404))}}),Object(i.a)({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:function(){return t.e(36).then(t.bind(null,405))}}),Object(i.a)({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:function(){return t.e(37).then(t.bind(null,406))}}),Object(i.a)({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:function(){return t.e(38).then(t.bind(null,407))}}),Object(i.a)({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:function(){return t.e(39).then(t.bind(null,408))}}),Object(i.a)({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:function(){return t.e(40).then(t.bind(null,409))}}),Object(i.a)({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:function(){return t.e(41).then(t.bind(null,410))}}),Object(i.a)({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:function(){return t.e(42).then(t.bind(null,411))}}),Object(i.a)({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:function(){return t.e(43).then(t.bind(null,412))}}),Object(i.a)({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:function(){return t.e(44).then(t.bind(null,413))}}),Object(i.a)({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:function(){return t.e(45).then(t.bind(null,414))}}),Object(i.a)({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:function(){return t.e(46).then(t.bind(null,415))}}),Object(i.a)({id:"r",extensions:[".r",".rhistory",".rprofile",".rt"],aliases:["R","r"],loader:function(){return t.e(47).then(t.bind(null,416))}}),Object(i.a)({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:function(){return t.e(48).then(t.bind(null,417))}}),Object(i.a)({id:"redis",extensions:[".redis"],aliases:["redis"],loader:function(){return t.e(49).then(t.bind(null,418))}}),Object(i.a)({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:function(){return t.e(50).then(t.bind(null,419))}}),Object(i.a)({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:function(){return t.e(51).then(t.bind(null,420))}}),Object(i.a)({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile"],aliases:["Ruby","rb"],loader:function(){return t.e(52).then(t.bind(null,421))}}),Object(i.a)({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:function(){return t.e(53).then(t.bind(null,422))}}),Object(i.a)({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:function(){return t.e(54).then(t.bind(null,423))}}),Object(i.a)({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:function(){return t.e(55).then(t.bind(null,424))}}),Object(i.a)({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:function(){return t.e(56).then(t.bind(null,425))}}),Object(i.a)({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:function(){return t.e(57).then(t.bind(null,426))}}),Object(i.a)({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:function(){return t.e(58).then(t.bind(null,427))}}),Object(i.a)({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:function(){return t.e(59).then(t.bind(null,428))}}),Object(i.a)({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:function(){return t.e(60).then(t.bind(null,429))}}),Object(i.a)({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:function(){return t.e(61).then(t.bind(null,430))}}),Object(i.a)({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:function(){return t.e(62).then(t.bind(null,431))}}),Object(i.a)({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:function(){return t.e(63).then(t.bind(null,432))}}),Object(i.a)({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:function(){return t.e(64).then(t.bind(null,433))}});t(228);Object(i.a)({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:function(){return t.e(66).then(t.bind(null,434))}}),Object(i.a)({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:function(){return t.e(67).then(t.bind(null,435))}}),Object(i.a)({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml"],loader:function(){return t.e(68).then(t.bind(null,436))}})},376:function(e,n,t){"use strict";t(154),t(182),t(289),t(284),t(193),t(244),t(224),t(199),t(200),t(237),t(168),t(240),t(245),t(205),t(246),t(183),t(234),t(207),t(238),t(186),t(177),t(185),t(235),t(247),t(236),t(248),t(218),t(239),t(249),t(250),t(153),t(231);var i=t(66),s=t(70),o=t(195),a=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),r=function(e){function n(){return e.call(this,{id:"editor.action.forceRetokenize",label:i.a("forceRetokenize","Developer: Force Retokenize"),alias:"Developer: Force Retokenize",precondition:void 0})||this}return a(n,e),n.prototype.run=function(e,n){if(n.hasModel()){var t=n.getModel();t.resetTokenization();var i=new o.a(!0);t.forceTokenization(t.getLineCount()),i.stop(),console.log("tokenization took "+i.elapsed())}},n}(s.b);Object(s.f)(r);t(158),t(225),t(181),t(226),t(116)},378:function(e,n,t){var i;self.MonacoEnvironment=(i={editorWorkerService:"editor.worker.js",json:"json.worker.js",typescript:"ts.worker.js",javascript:"ts.worker.js"},{getWorkerUrl:function(e,n){var s=t.p,o=(s?s.replace(/\/$/,"")+"/":"")+i[n];if(/^(http:)|(https:)|(file:)/.test(o)){var a=String(window.location),r=a.substr(0,a.length-window.location.hash.length-window.location.search.length-window.location.pathname.length);if(o.substring(0,r.length)!==r)return"data:text/javascript;charset=utf-8,"+encodeURIComponent("/*"+n+'*/importScripts("'+o+'");')}return o}}),t(188),t(193),t(244),t(199),t(200),t(237),t(168),t(240),t(245),t(154),t(205),t(246),t(183),t(234),t(207),t(238),t(185),t(212),t(186),t(177),t(235),t(216),t(247),t(217),t(236),t(248),t(218),t(239),t(219),t(241),t(220),t(249),t(250),t(153),t(231),t(223),t(158),t(224),t(225),t(181),t(226),e.exports=t(364),t(227),t(228),t(251),t(229)}}]);
//# sourceMappingURL=5.96d041c3.chunk.js.map