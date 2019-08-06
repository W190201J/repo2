
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"61",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=dataLayer[0].basketProducts,a=\"\";c.forEach(function(b){a=\"\"==a?b.id:a+(\"|\"+b.id)});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=dataLayer[0].transactionProducts,a=\"\";c.forEach(function(b){a=\"\"==a?b.id:a+(\"|\"+b.id)});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=dataLayer[0].transactionProducts,a=\"\";c.forEach(function(b){a=\"\"==a?b.quantity:a+(\"|\"+b.quantity)});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=dataLayer[0].transactionProducts,a=\"\";c.forEach(function(b){a=\"\"==a?b.price:a+(\"|\"+b.price)});return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=dataLayer[0].transactionProducts;return a.length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!=typeof dataLayer[0].productViewed)return dataLayer[0].productViewed.id})();"]
    },{
      "function":"__v",
      "vtp_name":"viewedProducts",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[],b=",["escape",["macro",6],8,16],";for(i=0;i\u003Cb.length\u0026\u00263\u003Ei;i++)a.push(b[i].id);return a})();"]
    },{
      "function":"__v",
      "vtp_name":"location",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"IE\"==",["escape",["macro",8],8,16],"?26124:\"US\"==",["escape",["macro",8],8,16],"?26123:18156})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=getQueryVariable(\"pid\");if(0\u003Ca.length)b=a.toString();else{a=dataLayer[0].viewedProducts;var b=\"\";a.forEach(function(a){b=\"\"==b?a.id:b+(\",\"+a.id)})}return b})();"]
    },{
      "function":"__v",
      "vtp_name":"transactionProducts",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=",["escape",["macro",11],8,16],";for(i=0;i\u003Ca.length;i++)b.push({id:a[i].id,price:a[i].price,quantity:a[i].quantity});return b})();"]
    },{
      "function":"__v",
      "vtp_name":"basketProducts",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=",["escape",["macro",13],8,16],";for(i=0;i\u003Ca.length;i++)b.push({id:a[i].id,price:a[i].price,quantity:a[i].quantity});return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!=typeof dataLayer[0].userExisting?Number(dataLayer[0].userExisting):0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=0,a=1;a\u003C=dataLayer[0].transactionProducts.length;a++){var c=dataLayer[0].transactionProducts[a-1];b+=c.price*c.quantity}return(b+dataLayer[0].transactionShipping-dataLayer[0].transactionTotal).toFixed(2)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!=typeof dataLayer[0].userExisting?\"F1 - Existing Customer\":\"F1 - New Customer\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!=typeof dataLayer[0].userId?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=dataLayer[0].viewedProducts,a=\"\";c.forEach(function(b){a=\"\"==a?b.id:a+(\",\"+b.id)});return a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"basketProducts"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",20],8,16],",c=[],a;for(a in b)c[a]=b[a].id;return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],",b=0,c;for(c in a)b+=a[c].price;return b})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionProducts"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",23],8,16],",c=[],a;for(a in b)c[a]=b[a].id;return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",25],8,16],".length;a++)b[a]=",["escape",["macro",25],8,16],"[a].sku;return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userExisting"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a||\"true\"==a?\"Existing\":\"New\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",25],8,16],",d=[],b=0;b\u003Cc.length;b++){var a=c[b];a={quantity:a.quantity,unitPrice:a.grossUnitPrice,unitPriceLessTax:a.netUnitPrice,SKU:a.id,productName:a.name};d.push(a)}return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=encodeURI(window.location.href),c=!1,b=\"\";try{for(;!c;)b=decodeURIComponent(a),b===a\u0026\u0026(c=!0),a=b;a=\/([^.@\\s]+)(\\.[^.@\\s]+)*@([^.@\\s]+\\.)+([^.@\\s]+)\/.test(a)?window.location.origin:window.location.href}catch(d){a=window.location.origin}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewed.category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],".split(\",\");return a[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],".split(\",\");return a[1].substr(1)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],".split(\",\");return a[2].substr(1)})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productViewed.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",35],8,16],";if(void 0!==d){for(var c=\"\",a=[0,20,50,100,200,500,1E3],b=0;b\u003Ca.length;b++)if(d\u003C=a[b]){c=a[b-1]+\"-\"+a[b];break}\"\"===c\u0026\u0026(c=a[a.length-1]+\"+\")}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].name);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].price);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].quantity);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].quantity);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].price);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].name);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].category);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",20],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].sku);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].category);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",23],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].sku);return c})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"s.pageName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",49],8,16],",b=RegExp(\"\/mobile\/[A-Za-z]+\/$\",\"ig\"),c=RegExp(\"\/mobile\/[A-Za-z]+$\",\"ig\"),d=RegExp(\"\/Home$\",\"ig\"),e=RegExp(\"\/c\/\",\"ig\"),f=RegExp(\"\/product\/\",\"ig\"),g=RegExp(\"basket\",\"ig\"),h=RegExp(\"order_complete|OrderComplete\",\"ig\");return a.match(b)||a.match(c)||",["escape",["macro",50],8,16],".match(d)?\"homepage\":a.match(e)?\"category\":a.match(f)?\"product\":a.match(g)?\"cart\":a.match(h)?\"purchase\":\"other\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",25],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].id);return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"TransactionTotalGBP"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShipping"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=parseFloat(",["escape",["macro",53],8,16],"),c=parseFloat(",["escape",["macro",54],8,16],"),d=parseFloat(",["escape",["macro",55],8,16],"),b=parseFloat(",["escape",["macro",56],8,16],"),e=c,g=c-d,k=d,h=b;c-=b;var a=f\/g;b=e*a;d*=a;a*=h;var l=b-a;return e={originalOrderValue:e.toFixed(2),originalNetOrderValue:g.toFixed(2),originalTax:k.toFixed(2),originalShipping:h.toFixed(2),originalSubTotal:c.toFixed(2),orderValueGBP:b.toFixed(2),netOrderValueGBP:f.toFixed(2),taxGBP:d.toFixed(2),shippingGBP:a.toFixed(2),subTotalGBP:l.toFixed(2)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],c=",["escape",["macro",25],8,16],",a=0;a\u003Cc.length;a++)b.push(\"'\"+c[a].id+\"'\");return\"[\"+b.join(\",\")+\"]\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],c=",["escape",["macro",25],8,16],",a=0;a\u003Cc.length;a++)b.push(\"'\"+c[a].price+\"'\");return\"[\"+b.join(\",\")+\"]\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],c=",["escape",["macro",25],8,16],",a=0;a\u003Cc.length;a++)b.push(\"'\"+c[a].size+\"'\");return\"[\"+b.join(\",\")+\"]\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";return a||1==a?\"1042245\":\"1042235\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 271905})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",54],8,16],",a=",["escape",["macro",56],8,16],",b=",["escape",["macro",55],8,16],";a=0\u003Cb?a\/1.2:a;a=Math.round(100*a)\/100;return Math.round(100*(c-a-b))\/100})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionDiscountTotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",25],8,16],",a=0,b=0,d=c.length;b\u003Cd;b++){var e=c[b];a+=e.priceNet}0\u003E",["escape",["macro",64],8,16],"\u0026\u0026(a+=",["escape",["macro",64],8,16],"\/1.2);return Math.round(100*a)\/100})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"testTransaction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"transactionTotal",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_name":"transactionId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"giftCertificate",
      "vtp_dataLayerVersion":2
    },{
      "function":"__r"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"KB_105_Currency"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"productViewed.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewed.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewed.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=",["escape",["macro",30],8,16],",c=",["escape",["macro",78],8,16],",a={\"mercedes-amg-petronas\":\"Mercedes AMG Petronas\",\"scuderia-ferrari\":\"Scuderia Ferrari\",\"red-bull-racing\":\"Red Bull Racing\",mclaren:\"McLaren\",\"williams-martini-racing\":\"Williams Martini Racing\",\"sahara-force-india-f1-team\":\"Sahara Force India\",\"scuderia-toro-rosso\":\"Scuderia Toro Rosso\",\"renault-f1-team\":\"Renault\",\"sauber-f1-team\":\"Sauber\",\"haas-f1-team\":\"Haas\",\"german-grand-prix\":\"German Grand Prix\",\"hungarian-grand-prix\":\"Hungarian Grand Prix\",\n\"belgian-grand-prix\":\"Belgian Grand Prix\",\"italian-grand-prix\":\"Italian Grand Prix\",\"british-grand-prix\":\"British Grand Prix\",\"spanish-grand-prix\":\"Spanish Grand Prix\",\"french-grand-prix\":\"French Grand Prix\",\"austria-grand-prix\":\"Austria Grand Prix\"};if(void 0!==c)for(var b in a){if(-1\u003Cc.indexOf(a[b])){var d=a[b];break}}else for(b in a)-1\u003Ce.indexOf(b)\u0026\u0026(d=a[b]);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",45],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[0]);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",45],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[1].substr(1));return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",45],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[2].substr(1));return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",39],8,16],";b=b.split(\"|\");for(var f=[],e=0;e\u003Cb.length;e++){for(var d=\"\",a=[0,20,50,100,200,500,1E3],c=0;c\u003Ca.length;c++)if(b[e]\u003C=a[c]){d=a[c-1]+\"-\"+a[c];break}\"\"===d\u0026\u0026(d=a[a.length-1]+\"+\");f.push(d)}return b=f.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",46],8,16],",c=[],a=0;a\u003Cb.length;a++)b[a].split(\"\/\")[2]?c.push(b[a].split(\"\/\")[1]+\"\/\"+b[a].split(\"\/\")[2]):c.push(b[a].split(\"\/\")[1]);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",38],8,16],";a=a.split(\"|\");for(var e=[],b={\"mercedes-amg-petronas\":\"Mercedes AMG Petronas\",\"scuderia-ferrari\":\"Scuderia Ferrari\",\"red-bull-racing\":\"Red Bull Racing\",mclaren:\"McLaren\",\"williams-martini-racing\":\"Williams Martini Racing\",\"sahara-force-india-f1-team\":\"Sahara Force India\",\"scuderia-toro-rosso\":\"Scuderia Toro Rosso\",\"renault-f1-team\":\"Renault\",\"sauber-f1-team\":\"Sauber\",\"haas-f1-team\":\"Haas\",\"german-grand-prix\":\"German Grand Prix\",\"hungarian-grand-prix\":\"Hungarian Grand Prix\",\n\"belgian-grand-prix\":\"Belgian Grand Prix\",\"italian-grand-prix\":\"Italian Grand Prix\",\"british-grand-prix\":\"British Grand Prix\",\"spanish-grand-prix\":\"Spanish Grand Prix\",\"french-grand-prix\":\"French Grand Prix\",\"austria-grand-prix\":\"Austria Grand Prix\"},c=0;c\u003Ca.length;c++)for(var d in b)if(-1\u003Ca[c].indexOf(b[d])){e.push(b[d]);break}return d=e.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",47],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[0]);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",47],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[1].substr(1));return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",47],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push(b[a].split(\",\")[2].substr(1));return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",42],8,16],";b=b.split(\"|\");for(var f=[],e=0;e\u003Cb.length;e++){for(var d=\"\",a=[0,20,50,100,200,500,1E3],c=0;c\u003Ca.length;c++)if(b[e]\u003C=a[c]){d=a[c-1]+\"-\"+a[c];break}\"\"===d\u0026\u0026(d=a[a.length-1]+\"+\");f.push(d)}return b=f.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",48],8,16],",c=[],a=0;a\u003Cb.length;a++)b[a].split(\"\/\")[2]?c.push(b[a].split(\"\/\")[1]+\"\/\"+b[a].split(\"\/\")[2]):c.push(b[a].split(\"\/\")[1]);return c.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],";a=a.split(\"|\");for(var e=[],b={\"mercedes-amg-petronas\":\"Mercedes AMG Petronas\",\"scuderia-ferrari\":\"Scuderia Ferrari\",\"red-bull-racing\":\"Red Bull Racing\",mclaren:\"McLaren\",\"williams-martini-racing\":\"Williams Martini Racing\",\"sahara-force-india-f1-team\":\"Sahara Force India\",\"scuderia-toro-rosso\":\"Scuderia Toro Rosso\",\"renault-f1-team\":\"Renault\",\"sauber-f1-team\":\"Sauber\",\"haas-f1-team\":\"Haas\",\"german-grand-prix\":\"German Grand Prix\",\"hungarian-grand-prix\":\"Hungarian Grand Prix\",\n\"belgian-grand-prix\":\"Belgian Grand Prix\",\"italian-grand-prix\":\"Italian Grand Prix\",\"british-grand-prix\":\"British Grand Prix\",\"spanish-grand-prix\":\"Spanish Grand Prix\",\"french-grand-prix\":\"French Grand Prix\",\"austria-grand-prix\":\"Austria Grand Prix\"},c=0;c\u003Ca.length;c++)for(var d in b)if(-1\u003Ca[c].indexOf(b[d])){e.push(b[d]);break}return d=e.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".orderValueGBP})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".netOrderValueGBP})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".taxGBP})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".shippingGBP})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".subTotalGBP})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".originalOrderValue})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".originalNetOrderValue})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".originalTax})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".originalShipping})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],".originalSubTotal})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__v",
      "vtp_name":"userId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ReferringPartner"
    },{
      "function":"__v",
      "vtp_name":"portal",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cookie-consented"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionEmail"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var d=",["escape",["macro",25],8,16],",a=\"\",b=0,e=d.length;b\u003Ce;b++){0\u003Cb\u0026\u0026(a+=\"|\");var c=d[b];a=a+\"",["escape",["macro",61],7],"::\"+c.priceNet+\"::\"+c.name+\"::\"+c.id+\"::\"}0\u003E",["escape",["macro",64],8,16],"\u0026\u0026(a=a+\"|",["escape",["macro",61],7],"::\"+",["escape",["macro",64],8,16],"\/1.2+\"::discount::::\");return a})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"network",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"transactionId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewed.id"
    },{
      "function":"__v",
      "vtp_name":"CriteoPageType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"userEmail",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CriteoPageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"google_tag_params.ecomm_pagetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",30],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","womens|women","value","women"],["map","key","mens|men","value","men"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"basketProducts.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"basketProducts.name"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",126],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","womens|women","value","women"],["map","key","mens|men","value","men"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",43],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","womens|women","value","women"],["map","key","mens|men","value","men"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProduct.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productViewed"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__sp",
      "once_per_event":true,
      "vtp_dataLayerVariable":["macro",67],
      "vtp_conversionLabel":"RCA8CKzeugUQvJqK5wM",
      "vtp_conversionId":"1021480252",
      "vtp_customParamsFormat":"DATA_LAYER",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",68],
      "tag_id":1
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/7083.xg4ken.com\/pixel\/v1?track=1\u0026token=346bf875-7ffe-4a43-9717-18480d2bca72\u0026conversionType=order\u0026revenue=",["escape",["macro",71],12],"\u0026currency=",["escape",["macro",72],12],"\u0026orderId=",["escape",["macro",73],12],"\u0026promoCode=",["escape",["macro",74],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",75],
      "tag_id":51
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",53],
      "vtp_orderId":["macro",73],
      "vtp_conversionId":"1021480252",
      "vtp_conversionLabel":"luUrCMzujAIQvJqK5wM",
      "vtp_url":["macro",68],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":52
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value","f1 store"],["map","key","u2","value","f1store.formula1.com"],["map","key","u3","value","motor racing"],["map","key","u6","value",["macro",76]],["map","key","u7","value",["macro",30]],["map","key","u8","value",["macro",51]],["map","key","u9","value",["macro",77]],["map","key","u10","value",["macro",78]],["map","key","u11","value",["macro",32]],["map","key","u12","value",["macro",33]],["map","key","u13","value",["macro",34]],["map","key","u17","value",["macro",35]],["map","key","u18","value",["macro",36]],["map","key","u19","value",["macro",79]],["map","key","u21","value",["macro",77]],["map","key","u4","value",["macro",80]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remarket",
      "vtp_useImageTag":false,
      "vtp_activityTag":"fanat0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8865123",
      "vtp_ordinalStandard":["macro",75],
      "vtp_url":["macro",68],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":55
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value","f1 store"],["map","key","u2","value","f1store.formula1.com"],["map","key","u3","value","motor racing"],["map","key","u6","value",["macro",76]],["map","key","u7","value",["macro",30]],["map","key","u8","value",["macro",51]],["map","key","u9","value",["macro",37]],["map","key","u10","value",["macro",38]],["map","key","u11","value",["macro",81]],["map","key","u12","value",["macro",82]],["map","key","u13","value",["macro",83]],["map","key","u17","value",["macro",39]],["map","key","u18","value",["macro",84]],["map","key","u19","value",["macro",40]],["map","key","u15","value",["macro",85]],["map","key","u21","value",["macro",37]],["map","key","u4","value",["macro",86]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"remarket",
      "vtp_useImageTag":false,
      "vtp_activityTag":"fanat0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8865123",
      "vtp_ordinalStandard":["macro",75],
      "vtp_url":["macro",68],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":56
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value","f1 store"],["map","key","u2","value","f1store.formula1.com"],["map","key","u3","value","motor racing"],["map","key","u6","value","GBP"],["map","key","u9","value",["macro",44]],["map","key","u10","value",["macro",43]],["map","key","u11","value",["macro",87]],["map","key","u12","value",["macro",88]],["map","key","u13","value",["macro",89]],["map","key","u17","value",["macro",42]],["map","key","u18","value",["macro",90]],["map","key","u19","value",["macro",41]],["map","key","u15","value",["macro",91]],["map","key","u21","value",["macro",44]],["map","key","u4","value",["macro",92]],["map","key","u20","value",["macro",93]],["map","key","u24","value",["macro",94]],["map","key","u25","value",["macro",95]],["map","key","u26","value",["macro",96]],["map","key","u27","value",["macro",97]],["map","key","u22","value",["macro",98]],["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",100]],["map","key","u30","value",["macro",101]],["map","key","u31","value",["macro",102]],["map","key","u23","value",["macro",72]],["map","key","u32","value",["macro",74]]],
      "vtp_revenue":["macro",94],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",73],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"gbpsale",
      "vtp_useImageTag":false,
      "vtp_activityTag":"f1store",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8865123",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",68],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":57
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":59
    },{
      "function":"__fls",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value","f1 store"],["map","key","u2","value","f1store.formula1.com"],["map","key","u3","value","motor racing"],["map","key","u6","value","GBP"],["map","key","u9","value",["macro",44]],["map","key","u10","value",["macro",43]],["map","key","u11","value",["macro",87]],["map","key","u12","value",["macro",88]],["map","key","u13","value",["macro",89]],["map","key","u17","value",["macro",42]],["map","key","u18","value",["macro",90]],["map","key","u19","value",["macro",41]],["map","key","u15","value",["macro",91]],["map","key","u21","value",["macro",44]],["map","key","u4","value",["macro",92]]],
      "vtp_revenue":["macro",94],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",73],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"msale",
      "vtp_useImageTag":false,
      "vtp_activityTag":"fanat0",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8865123",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",68],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":68
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"count",
      "vtp_useImageTag":false,
      "vtp_activityTag":"f1store",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8865123",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",75],
      "vtp_url":["macro",68],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":69
    },{
      "function":"__cl",
      "tag_id":77
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"4011489\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar uetq=uetq||[];uetq.push({gv:",["escape",["macro",53],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){try{",["escape",["macro",50],8,16],".match(\/Product Detail|Kit-Selector\/i)?dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:",["escape",["macro",77],8,16],",ecomm_pagetype:\"product\",ecomm_totalvalue:",["escape",["macro",35],8,16],"}}):",["escape",["macro",50],8,16],".match(\/basket\/i)?dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{ecomm_prodid:",["escape",["macro",21],8,16],",ecomm_pagetype:\"cart\",ecomm_totalvalue:",["escape",["macro",22],8,16],"}}):",["escape",["macro",69],8,16],".match(\/order_complete.aspx\/i)?dataLayer.push({event:\"fireRemarketingTag\",\ngoogle_tag_params:{ecomm_prodid:",["escape",["macro",26],8,16],",ecomm_pagetype:\"purchase\",ecomm_totalvalue:",["escape",["macro",71],8,16],"}}):dataLayer.push({event:\"fireRemarketingTag\",google_tag_params:{}})}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/113789.ct.js\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Evar rm_trans={orderid:\"",["escape",["macro",73],7],"\",currency:\"",["escape",["macro",72],7],"\",customerStatus:\"",["escape",["macro",28],7],"\",conversionType:\"Sale\",customerID:\"",["escape",["macro",104],7],"\",discountCode:\"",["escape",["macro",74],7],"\",discountAmount:0,taxAmount:\"",["escape",["macro",55],7],"\",lineitems:",["escape",["macro",29],8,16],"};window.DataLayer?(DataLayer.Sale=DataLayer.Sale||{Basket:rm_trans},DataLayer.Sale.Basket=DataLayer.Sale.Basket||rm_trans):window.DataLayer={Sale:{Basket:rm_trans}};DataLayer.Sale.Basket.Ready=!0;\nfunction sDisplay(){var c=null,a=\"6640\";a=\"\/\/tags.rd.linksynergy.com\/js\/\"+a;var b=c,f=c,g=\"\",d=window.DataLayer\u0026\u0026window.DataLayer.Sale\u0026\u0026window.DataLayer.Sale.Basket?window.DataLayer.Sale.Basket:{};if(d.orderid){c=0;f=d.orderid;g=\"conv\";b=\"\";for(var e=0;e\u003C(d.lineitems?d.lineitems.length:0);e++)c+=d.lineitems[e].unitPrice*d.lineitems[e].quantity,b+=d.lineitems[e].SKU+\",\";d.discountAmount\u0026\u0026(c-=Math.abs(Number(d.discountAmount)));c=Math.round(100*c)\/100;b=b.slice(0,-1)}b\u0026\u0026(a=-1\u003Ca.indexOf(\"?\")?a+\"\\x26prodID\\x3d\"+\nb:a+\"\/?prodID\\x3d\"+b);f\u0026\u0026(a=-1\u003Ca.indexOf(\"?\")?a+\"\\x26orderNumber\\x3d\"+f:a+\"\/?orderNumber\\x3d\"+f);c\u0026\u0026(a=-1\u003Ca.indexOf(\"?\")?a+\"\\x26price\\x3d\"+c:a+\"\/?price\\x3d\"+c);g\u0026\u0026(a=-1\u003Ca.indexOf(\"?\")?a+\"\\x26pt\\x3d\"+g:a+\"\/?pt\\x3d\"+g);b=document.createElement(\"script\");b.src=a;b.type=\"text\/javascript\";document.getElementsByTagName(\"body\")[0].appendChild(b)}sDisplay();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var querystring=[],i=1;i\u003C=dataLayer[0].transactionProducts.length;i++){var product=dataLayer[0].transactionProducts[i-1];querystring.push(\"ITEM\"+i+\"\\x3d\"+product.sku);querystring.push(\"AMT\"+i+\"\\x3d\"+product.price);querystring.push(\"QTY\"+i+\"\\x3d\"+product.quantity)}var utype=379008+",["escape",["macro",15],8,16],",containerId=10340+",["escape",["macro",15],8,16],",cjid=1534142,frm=document.createElement(\"iframe\");frm.height=\"1px\";frm.width=\"1px\";frm.frameborder=\"0\";frm.scrolling=\"no\";frm.name=\"",["escape",["macro",17],7],"\";\nfrm.src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d\"+containerId+\"\\x26cid\\x3d\"+cjid+\"\\x26type\\x3d\"+utype+\"\\x26oid\\x3d",["escape",["macro",73],7],"\\x26\"+querystring.join(\"\\x26\")+\"\\x26discount\\x3d",["escape",["macro",16],7],"\\x26coupon\\x3d",["escape",["macro",106],7],"\\x26currency\\x3d",["escape",["macro",72],7],"\";document.body.appendChild(frm);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1168039616619006\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=866682776752493\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:[",["escape",["macro",77],8,16],"],content_type:\"product\",value:\"",["escape",["macro",35],7],"\",currency:\"",["escape",["macro",76],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "setup_tags":["list",["tag",15,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",52],8,16],",content_type:\"product\",value:\"",["escape",["macro",54],7],"\",currency:\"",["escape",["macro",72],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "setup_tags":["list",["tag",15,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{content_ids:[",["escape",["macro",77],8,16],"],content_type:\"product\",value:\"",["escape",["macro",35],7],"\",currency:\"",["escape",["macro",76],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/static.usizy.es\/js\/platform.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EuSizy.push({event:\"CONFIRM\",order:\"",["escape",["macro",73],7],"\",products:",["escape",["macro",58],8,16],",sizes:",["escape",["macro",60],8,16],",prices:",["escape",["macro",59],8,16],",total:\"",["escape",["macro",71],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=\"XA53651F2E27033AE45AD35A393DE9CAC\";_tsConfig={yOffset:",["escape",["macro",108],8,16],"?\"0\":\"100\",variant:\"reviews\",customElementId:\"\",trustcardDirection:\"\",customBadgeWidth:\"\",customBadgeHeight:\"\",disableResponsive:\"false\",disableTrustbadge:\"false\"};var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=\"\/\/widgets.trustedshops.com\/js\/\"+b+\".js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "teardown_tags":["list",["tag",20,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Evar strOut=\"\\x3cdiv id\\x3d'trustedShopsCheckout' style\\x3d'display: none;'\\x3e\";strOut+=\"\\x3cspan id\\x3d'tsCheckoutOrderNr'\\x3e\"+",["escape",["macro",73],8,16],"+\"\\x3c\/span\\x3e\";strOut+=\"\\x3cspan id\\x3d'tsCheckoutBuyerEmail'\\x3e\"+",["escape",["macro",109],8,16],"+\"\\x3c\/span\\x3e\";strOut+=\"\\x3cspan id\\x3d'tsCheckoutOrderAmount'\\x3e\"+",["escape",["macro",54],8,16],"+\"\\x3c\/span\\x3e\";strOut+=\"\\x3cspan id\\x3d'tsCheckoutOrderCurrency'\\x3e\"+",["escape",["macro",72],8,16],"+\"\\x3c\/span\\x3e\";strOut+=\"\\x3cspan id\\x3d'tsCheckoutOrderPaymentType'\\x3eOTHERS\\x3c\/span\\x3e\";\ndocument.write(strOut);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d,h){a.ITCVROBJ=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/cvr.min.js\",\"ITCVRQ\");ITCVRQ(\"set\",\"trk.programId\",\"",["escape",["macro",62],7],"\");\nITCVRQ(\"set\",\"cvr\",{value:\"",["escape",["macro",65],7],"\",currency:\"",["escape",["macro",72],7],"\",language:\"en_EN\",eventId:\"",["escape",["macro",61],7],"\",orderReference:\"",["escape",["macro",73],7],"\",comment:\"\",multiple:\"\",checksum:\"\",items:\"",["escape",["macro",110],7],"\",customerId:\"\",voucherId:\"",["escape",["macro",74],7],"\"});ITCVRQ(\"conversion\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d,h){a.ITCLKOBJ=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/analytics.webgains.io\/clk.min.js\",\"ITCLKQ\");ITCLKQ(\"set\",\"internal.api\",!0);ITCLKQ(\"set\",\"internal.cookie\",!0);ITCLKQ(\"click\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction cookieWG(){document.cookie=\"ReferringPartner\\x3dWG; max-age\\x3d31536000; path\\x3d\/\"}cookieWG();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction cookieCj(){document.cookie=\"Source\\x3dCJ; max-age\\x3d31536000; path\\x3d\/\";document.cookie=\"ReferringPartner\\x3dCJ; max-age\\x3d31536000; path\\x3d\/\"}cookieCj();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"fireRemarketingTag"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"order_complete|OrderComplete",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"\/basket"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"GB"
    },{
      "function":"_re",
      "arg0":["macro",105],
      "arg1":"CJ|undefined",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",107],
      "arg1":".addToBasket *"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",49],
      "arg1":"\/product\/"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"5"
    },{
      "function":"_re",
      "arg0":["macro",105],
      "arg1":"WG|undefined",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"\\?network=wg|\u0026network=wg",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"\\?utm_source=commissionjunction|\u0026utm_source=commissionjunction",
      "ignore_case":true
    }],
  "rules":[
    [["if",0],["add",0]],
    [["if",1,2],["add",1,2,17,19,5,7],["block",23]],
    [["if",2],["add",3,6,8,10,15,9]],
    [["if",2,4],["add",4],["block",3]],
    [["if",5],["add",11]],
    [["if",2,6,7],["add",12]],
    [["if",1,2,8],["add",13]],
    [["if",1,2,9],["add",14]],
    [["if",10,11],["add",16]],
    [["if",2,12],["add",18]],
    [["if",2,13,14],["add",20]],
    [["if",1,2,14],["add",21]],
    [["if",1,2,15],["add",22]],
    [["if",2,6],["add",23]],
    [["if",2,16],["add",24]],
    [["if",2,17],["add",25]],
    [["if",2,3],["block",1,2,5,7,10,14,17,19,21]]]
},
"runtime":[
[],[]
]



};
var ba,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,fa=null;var ha=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ra=function(a,b){for(var c=new qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ta=function(a){return Math.round(Number(a))||0},ua=function(a){return"false"==String(a).toLowerCase()?!1:!!a},va=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},wa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},xa=function(){return(new Date).getTime()},qa=function(){this.prefix="gtm.";this.values={}};qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};qa.prototype.get=function(a){return this.values[this.prefix+a]};qa.prototype.contains=function(a){return void 0!==this.get(a)};
var ya=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},za=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Aa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ca=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Da=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ga=function(a){if(null==a)return String(a);var b=Ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ha=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ia=function(a){if(!a||"object"!=Ga(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ha(a,"constructor")&&!Ha(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ha(a,b)},f=function(a,b){var c=b||("array"==Ga(a)?[]:{}),d;for(d in a)if(Ha(a,d)){var e=a[d];"array"==Ga(e)?("array"!=Ga(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ia(e)?(Ia(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};var u=window,A=document,Ka=navigator,La=A.currentScript&&A.currentScript.src,Ma=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=A.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===fa)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){fa=k;break b}}fa=""}e=fa;e&&d.setAttribute("nonce",e);var l=A.getElementsByTagName("script")[0]||A.body||A.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(La){var a=La.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=A.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=A.body&&A.body.lastChild||
A.body||A.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ta=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ua=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){u.setTimeout(a,0)},Va=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=A.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Za=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},$a=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ab=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var bb={},cb=function(a,b){bb[a]=bb[a]||[];bb[a][b]=!0},db=function(a){for(var b=[],c=bb[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var eb=/:[0-9]+$/,fb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ib=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=gb(a.protocol)||gb(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(eb,"").toLowerCase());var g=b,h,k=gb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=hb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(eb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||cb("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=fb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},gb=function(a){return a?a.replace(":","").toLowerCase():""},hb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
jb=function(a){var b=A.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||cb("TAGGING",1),c="/"+c);var d=b.hostname.replace(eb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var kb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},nb=function(a,b,c,d){var e=lb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=mb(e,function(g){return g.Fb},b);if(1===e.length)return e[0].id;e=mb(e,function(g){return g.Wa},c);return e[0]?e[0].id:void 0}};
function ob(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=kb(b,e).indexOf(c)}
var rb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=pb(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!qb(y,t)&&ob(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!qb(q,t)&&ob(m,a,l)}return k};function mb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function lb(a,b){for(var c=[],d=kb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Fb:1*k[0]||1,Wa:1*k[1]||1}))}}return c}
var sb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tb=/(^|\.)doubleclick\.net$/i,qb=function(a,b){return tb.test(document.location.hostname)||"/"===b&&sb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ub=[],vb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},wb=function(a){return vb[a]},xb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};ub[7]=function(a){return String(a).replace(Bb,Db)};
ub[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bb,Db)+"'"}};var Kb=/['()]/g,Lb=function(a){return"%"+a.charCodeAt(0).toString(16)};ub[12]=function(a){var b=
encodeURIComponent(String(a));Kb.lastIndex=0;return Kb.test(b)?b.replace(Kb,Lb):b};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};ub[16]=function(a){return a};var Qb=[],Rb=[],Sb=[],Tb=[],Ub=[],Vb={},Wb,Xb,Yb,Zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Vb[c](e):(void 0)(c,e,b)},bc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},
cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Vb[b];return c?c.priorityOverride||0:0},ac=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Qb[g];if(!h||b.zc(h))return;c[g]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Yb&&(d=Yb.wf(d,k))}catch(w){b.Sd&&b.Sd(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ac(a[n],b,c);Xb&&(m=m||q===Xb.tb);d.push(q)}return Xb&&m?Xb.zf(d):d.join("");case "escape":d=ac(a[1],b,c);if(Xb&&la(a[1])&&"macro"===a[1][0]&&Xb.ag(a))return Xb.kg(d);d=String(d);for(var t=2;t<a.length;t++)ub[a[t]]&&(d=ub[a[t]](d));return d;case "tag":var p=a[1];if(!Tb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Ed:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=dc(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Wb(bc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=function(){var a=function(b){return{toString:function(){return b}}};return{$c:a("convert_case_to"),ad:a("convert_false_to"),bd:a("convert_null_to"),cd:a("convert_true_to"),dd:a("convert_undefined_to"),ia:a("function"),Le:a("instance_name"),Me:a("live_only"),Ne:a("malware_disabled"),Oe:a("metadata"),Vg:a("original_vendor_template_id"),Pe:a("once_per_event"),td:a("once_per_load"),ud:a("setup_tags"),vd:a("tag_id"),wd:a("teardown_tags")}}();var fc=null,ic=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Rb.length;e++){var g=Rb[e],h=hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Tb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=fc(e[g]);if(null===h)return null;
if(h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var jc,kc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.ef&&(l["fix_"+m]=!0),l.Fd=l.Fd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var r=k.slice(p.length);if(r.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,D:p.D,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var r={};p[2].replace(e,function(v,w,y,x,z){var C=y||x||z||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=C;r[w]=B.textContent||B.innerText||C});return{tagName:p[1],D:r,cb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},t=function(){for(var p in n)if(n[p].test(k)){var r=q[p]();return r?(r.type=r.type||p,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Fd&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Rd=function(){return this[this.length-1]};v.Ec=function(B){var E=this.Rd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.vf=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.cb=p.test(B.tagName)||B.cb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Ec("TABLE")?(k="<TBODY>"+k,C()):l.dh&&r.test(E)&&v.vf(E)?v.Ec(E)?x():(k="</"+B.tagName+">"+k,C()):B.cb||v.push(B)},endTag:function(B){v.Rd()?l.Jf&&!v.Ec(B.tagName)?x():v.pop():l.Jf&&(y(),C())}},C=function(){var B=k,E=w(y());k=B;if(E&&
z[E.type])z[E.type](E)};t=function(){C();return w(y())}}();return{append:function(p){k+=p},ug:t,jh:function(p){for(var r;(r=t())&&(!p[r.type]||!1!==p[r.type](r)););},clear:function(){var p=k;k="";return p},kh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.rh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.mh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.sh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.D){var t=m.D[q];
n+=" "+q+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.cb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.bh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.lf=a.lf||!b[h]&&h;jc=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,p){var r,v=q&&q.length||0;for(r=0;r<v;r++)t.call(p,q[r],r)}function d(q,t,p){for(var r in q)q.hasOwnProperty(r)&&t.call(p,r,q[r])}function e(q,
t){d(t,function(p,r){q[p]=r});return q}function g(q,t){q=q||{};d(t,function(p,r){b(q[p])||(q[p]=r)});return q}function h(q){try{return m.call(q)}catch(p){var t=[];c(q,function(r){t.push(r)});return t}}var k={Ve:a,We:a,Xe:a,Ye:a,ff:a,hf:function(q){return q},done:a,error:function(q){throw q;},yg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function t(p,r){var v=p.ownerDocument;e(this,{root:p,options:r,eb:v.defaultView||v.parentWindow,ya:v,Kb:jc("",{ef:!0}),jc:[p],Mc:"",Nc:v.createElement(p.nodeName),Za:[],na:[]});q(this.Nc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.na,arguments);for(var p;!this.Eb&&this.na.length;)p=this.na.shift(),"function"===typeof p?this.rf(p):this.Wc(p)};t.prototype.rf=function(p){var r={type:"function",value:p.name||p.toString()};this.Jc(r);p.call(this.eb,this.ya);this.Wd(r)};
t.prototype.Wc=function(p){this.Kb.append(p);for(var r,v=[],w,y;(r=this.Kb.ug())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Sg(v);w&&this.Pf(r);y&&this.Qf(r)};t.prototype.Sg=function(p){var r=this.nf(p);r.yd&&(r.xc=this.Mc+r.yd,this.Mc+=r.pg,this.Nc.innerHTML=r.xc,this.Pg())};t.prototype.nf=function(p){var r=this.jc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.D){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.D.id&&"ps-style"!==x.D.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.cb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{th:p,raw:v.join(""),yd:w.join(""),pg:y.join("")}};t.prototype.Pg=function(){for(var p,r=[this.Nc];b(p=r.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.jc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.jc[w].appendChild(p)}r.unshift.apply(r,h(p.childNodes))}};t.prototype.Pf=function(p){var r=this.Kb.clear();r&&this.na.unshift(r);p.src=p.D.src||p.D.Wg;p.src&&this.Za.length?this.Eb=p:this.Jc(p);var v=this;this.Rg(p,function(){v.Wd(p)})};t.prototype.Qf=function(p){var r=this.Kb.clear();r&&this.na.unshift(r);p.type=p.D.type||p.D.Xg||"text/css";this.Tg(p);r&&this.write()};t.prototype.Tg=function(p){var r=this.qf(p);this.Zf(r);p.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=p.content:
r.appendChild(this.ya.createTextNode(p.content)))};t.prototype.qf=function(p){var r=this.ya.createElement(p.tagName);r.setAttribute("type",p.type);d(p.D,function(v,w){r.setAttribute(v,w)});return r};t.prototype.Zf=function(p){this.Wc('<span id="ps-style"/>');var r=this.ya.getElementById("ps-style");r.parentNode.replaceChild(p,r)};t.prototype.Jc=function(p){p.gg=this.na;this.na=[];this.Za.unshift(p)};t.prototype.Wd=function(p){p!==this.Za[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Za.shift(),this.write.apply(this,p.gg),!this.Za.length&&this.Eb&&(this.Jc(this.Eb),this.Eb=null))};t.prototype.Rg=function(p,r){var v=this.pf(p),w=this.Eg(v),y=this.options.Ve;p.src&&(v.src=p.src,this.Cg(v,w?y:function(){r();y()}));try{this.Yf(v),p.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.pf=function(p){var r=this.ya.createElement(p.tagName);d(p.D,function(v,w){r.setAttribute(v,w)});p.content&&(r.text=p.content);return r};t.prototype.Yf=function(p){this.Wc('<span id="ps-script"/>');
var r=this.ya.getElementById("ps-script");r.parentNode.replaceChild(p,r)};t.prototype.Cg=function(p,r){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);r()}})};t.prototype.Eg=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.yg&&p.src&&p.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var w=r.shift(),y;w&&(y=w[w.length-1],y.We(),w.stream=t.apply(null,w),y.Xe())}function t(w,y,x){function z(F){F=x.hf(F);v.write(F);x.Ye(F)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var C=w.ownerDocument,B={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.eb.onerror||a;v.eb.onerror=function(F,P,U){x.error({gh:F+
" - "+P+":"+U});E.apply(v.eb,arguments)};v.write(y,function(){e(C,B);v.eb.onerror=E;x.done();v=null;q()});return v}var p=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.eh?w[0]:w;var z=[w,y,x];w.jg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.ff(z);r.push(z);v||q();return w.jg},{streams:{},ih:r,Yg:n})}();kc=l.postscribe}})();var xc={},yc=null,zc=Math.random();xc.i="GTM-98KT";xc.xb="7f1";var Ac={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cc="www.googletagmanager.com/gtm.js";var Dc=Cc,Ec=null,Fc=null,Gc=null,Hc="//www.googletagmanager.com/a?id="+xc.i+"&cv=61",Ic={},Jc={},Kc=function(){var a=yc.sequence||0;yc.sequence=a+1;return a};var G=function(a,b,c,d){return(2===Lc()||d||"http:"!=u.location.protocol?a:b)+c},Lc=function(){var a=Qa(),b;if(1===a)a:{var c=Dc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=A.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Mc=!1;
var Qc=function(){return"&tc="+Tb.filter(function(a){return a}).length},Zc=function(){Rc&&(u.clearTimeout(Rc),Rc=void 0);void 0===Sc||Tc[Sc]&&!Uc||(Vc[Sc]||Wc.cg()||0>=Xc--?(cb("GTM",1),Vc[Sc]=!0):(Wc.wg(),Sa(Yc()),Tc[Sc]=!0,Uc=""))},Yc=function(){var a=Sc;if(void 0===a)return"";var b=db("GTM"),c=db("TAGGING");return[$c,Tc[a]?"":"&es=1",ad[a],b?"&u="+b:"",c?"&ut="+c:"",Qc(),Uc,"&z=0"].join("")},bd=function(){return[Hc,"&v=3&t=t","&pid="+oa(),"&rv="+xc.xb].join("")},cd="0.005000">
Math.random(),$c=bd(),dd=function(){$c=bd()},Tc={},Uc="",Sc=void 0,ad={},Vc={},Rc=void 0,Wc=function(a,b){var c=0,d=0;return{cg:function(){if(c<a)return!1;xa()-d>=b&&(c=0);return c>=a},wg:function(){xa()-d>=b&&(c=0);c++;d=xa()}}}(2,1E3),Xc=1E3,ed=function(a,b){if(cd&&!Vc[a]&&Sc!==a){Zc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ad[a]="&e="+c+"&eid="+a;Rc||(Rc=u.setTimeout(Zc,500))}},fd=function(a,b,c){if(cd&&!Vc[a]&&b){a!==Sc&&(Zc(),Sc=a);var d=String(b[ec.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc||(Rc=u.setTimeout(Zc,500));2022<=Yc().length&&Zc()}};var gd={},hd=new qa,id={},jd={},nd={name:"dataLayer",set:function(a,b){f(kd(a,b),id);ld()},get:function(a){return md(a,2)},reset:function(){hd=new qa;id={};ld()}},md=function(a,b){if(2!=b){var c=hd.get(a);if(cd){var d=od(a);c!==d&&cb("GTM",5)}return c}return od(a)},od=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:qd(d)},qd=function(a){for(var b=id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var td=function(a,b){jd.hasOwnProperty(a)||(hd.set(a,b),f(kd(a,b),id),ld())},kd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ld=function(a){sa(jd,function(b,c){hd.set(b,c);f(kd(b,void 0),id);f(kd(b,c),id);a&&delete jd[b]})},ud=function(a,b,c){gd[a]=gd[a]||{};var d=1!==c?od(b):hd.get(b);"array"===Ga(d)||"object"===Ga(d)?gd[a][b]=f(d):gd[a][b]=d},vd=function(a,b){if(gd[a])return gd[a][b]};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bd=function(a){var b=md("gtm.whitelist");b&&cb("GTM",9);var c=b&&Da(va(b),xd),d=md("gtm.blacklist");d||(d=md("tagTypeBlacklist"))&&cb("GTM",3);
d?cb("GTM",8):d=[];Ad()&&(d=va(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(va(d),"google")&&cb("GTM",2);var e=d&&Da(va(d),yd),g={};return function(h){var k=h&&h[ec.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Jc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
ma(c,l[q])){cb("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=ma(e,k);if(p)t=p;else{var r=ra(e,l||[]);r&&cb("GTM",10);t=r}}var v=!m||t;v||!(0<=ma(l,"sandboxedScripts"))||c&&-1!==ma(c,"sandboxedScripts")||(v=ra(e,zd));return g[k]=v}},Ad=function(){return wd.test(u.location&&u.location.hostname)};var Cd={wf:function(a,b){b[ec.$c]&&"string"===typeof a&&(a=1==b[ec.$c]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ec.bd)&&null===a&&(a=b[ec.bd]);b.hasOwnProperty(ec.dd)&&void 0===a&&(a=b[ec.dd]);b.hasOwnProperty(ec.cd)&&!0===a&&(a=b[ec.cd]);b.hasOwnProperty(ec.ad)&&!1===a&&(a=b[ec.ad]);return a}};var Dd={active:!0,isWhitelisted:function(){return!0}},Ed=function(a){var b=yc.zones;!b&&a&&(b=yc.zones=a());return b};var Fd=!1,Gd=0,Hd=[];function Id(a){if(!Fd){var b=A.createEventObject,c="complete"==A.readyState,d="interactive"==A.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fd=!0;for(var e=0;e<Hd.length;e++)D(Hd[e])}Hd.push=function(){for(var g=0;g<arguments.length;g++)D(arguments[g]);return 0}}}function Jd(){if(!Fd&&140>Gd){Gd++;try{A.documentElement.doScroll("left"),Id()}catch(a){u.setTimeout(Jd,50)}}}var Kd=function(a){Fd?a():Hd.push(a)};var Ld={},Md={},Nd=function(a,b,c,d){if(!Md[a]||Ac[b]||"__zone"===b)return-1;var e={};Ia(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Md[a].tags.push(e)-1},Od=function(a,b,c,d){if(Md[a]){var e=Md[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pd(a){for(var b=Ld[a]||[],c=0;c<b.length;c++)b[c]();Ld[a]={push:function(d){d(xc.i,Md[a])}}}
var Sd=function(a,b,c){Md[a]={tags:[]};ia(b)&&Qd(a,b);c&&u.setTimeout(function(){return Pd(a)},Number(c));return Rd(a)},Qd=function(a,b){Ld[a]=Ld[a]||[];Ld[a].push(za(function(){return D(function(){b(xc.i,Md[a])})}))};function Rd(a){var b=0,c=0,d=!1;return{add:function(){c++;return za(function(){b++;d&&b>=c&&Pd(a)})},cf:function(){d=!0;b>=c&&Pd(a)}}};var Td=function(){function a(d){return!ka(d)||0>d?0:d}if(!yc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=ka(nd.get("gtm.start"))?nd.get("gtm.start"):0;yc._li={cst:a(c-b),cbt:a(Fc-b)}}};var Xd=!1,Yd=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},Zd=!1;
var ce=function(){},be=function(){return u.GoogleAnalyticsObject||"ga"},de=!1;var ke=function(a){};function je(a,b){a.containerId=xc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function le(a,b,c,d){var e=Tb[a],g=me(a,b,c,d);if(!g)return null;var h=ac(e[ec.ud],c,[]);if(h&&h.length){var k=h[0];g=le(k.index,{J:g,O:1===k.Ed?b.terminate:g,terminate:b.terminate},c,d)}return g}
function me(a,b,c,d){function e(){if(g[ec.Ne])k();else{var w=bc(g,c,[]),y=Nd(c.id,String(g[ec.ia]),Number(g[ec.vd]),w[ec.Oe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Tb[a],"5");Od(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=xa()-C;fd(c.id,Tb[a],"6");Od(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;fd(c.id,g,"1");var z=function(B){var E=xa()-C;ke(B);fd(c.id,g,"7");Od(c.id,y,"exception",E);x||(x=!0,k())};var C=xa();try{$b(w,c)}catch(B){z(B)}}}var g=Tb[a],h=b.J,k=b.O,l=b.terminate;if(c.zc(g))return null;var m=ac(g[ec.wd],c,[]);if(m&&m.length){var n=m[0],q=le(n.index,{J:h,O:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Ed?l:q}if(g[ec.td]||g[ec.Pe]){var t=g[ec.td]?Ub:c.Gg,p=h,r=k;if(!t[a]){e=za(e);var v=ne(a,t,e);h=v.J;k=v.O}return function(){t[a](p,r)}}return e}
function ne(a,b,c){var d=[],e=[];b[a]=oe(d,e,c);return{J:function(){b[a]=pe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=qe;for(var g=0;g<e.length;g++)e[g]()}}}function oe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pe(a){a()}function qe(a,b){b()};var te=function(a,b){for(var c=[],d=0;d<Tb.length;d++)if(a.Va[d]){var e=Tb[d];var g=b.add();try{var h=le(d,{J:g,O:g,terminate:g},a,d);h?c.push({je:d,$d:cc(e),Hf:h}):(re(d,a),g())}catch(l){g()}}b.cf();c.sort(se);for(var k=0;k<c.length;k++)c[k].Hf();return 0<c.length};function se(a,b){var c,d=b.$d,e=a.$d;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.je,k=b.je;g=h>k?1:h<k?-1:0}return g}
function re(a,b){if(!cd)return;var c=function(d){var e=b.zc(Tb[d])?"3":"4",g=ac(Tb[d][ec.ud],b,[]);g&&g.length&&c(g[0].index);fd(b.id,Tb[d],e);var h=ac(Tb[d][ec.wd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ue=!1,ve=function(a,b,c,d,e){if("gtm.js"==b){if(ue)return!1;ue=!0}ed(a,b);var g=Sd(a,d,e);ud(a,"event",1);ud(a,"ecommerce",1);ud(a,"gtm");var h={id:a,name:b,zc:Bd(c),Va:[],Gg:[],Sd:function(n){cb("GTM",6);ke(n)}};h.Va=ic(h);var k=te(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ce();if(!k)return k;for(var l=0;l<h.Va.length;l++)if(h.Va[l]){var m=
Tb[l];if(m&&!Ac[String(m[ec.ia])])return!0}return!1};var xe=function(a,b,c){var d=this;this.eventModel=a;this.targetConfig=b||{};this.globalConfig=c||{};this.getWithConfig=function(e){if(d.eventModel.hasOwnProperty(e))return d.eventModel[e];if(d.targetConfig.hasOwnProperty(e))return d.targetConfig[e];if(d.globalConfig.hasOwnProperty(e))return d.globalConfig[e]}};var H={Ub:"event_callback",Wb:"event_timeout",R:"gtag.config"};var ye=function(){var a=!1;return a};function ze(){var a=yc;return a.gcq=a.gcq||new Ae}var Be=function(a,b){ze().register(a,b)},Ce=function(){this.status=1;this.oc={};this.ae=null},De=function(a,b,c,d,e){this.type=a;this.Lg=b;this.ca=c||"";this.zb=d;this.defer=e},Ae=function(){this.ke={};this.Kd={};this.Qa=[]},Ee=function(a,b){return a.ke[b]=a.ke[b]||new Ce},Fe=function(a,b,c,d){var e=Ee(a,d.ca).ae;if(e){var g=f(c),h=f(Ee(a,d.ca).oc),k=f(a.Kd),l=new xe(g,h,k);try{e(b,d.Lg,l)}catch(m){}}};
Ae.prototype.register=function(a,b){3!==Ee(this,a).status&&(Ee(this,a).ae=b,Ee(this,a).status=3,this.flush())};Ae.prototype.push=function(a,b,c,d){var e=Math.floor(xa()/1E3);if(c&&1===Ee(this,c).status&&(Ee(this,c).status=2,this.push("require",[],c),!ye())){var g=encodeURIComponent(c);Pa(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+g+"&l=dataLayer&cx=c"))}this.Qa.push(new De(a,e,c,b,d));d||this.flush()};
Ae.prototype.flush=function(a){for(var b=this;this.Qa.length;){var c=this.Qa[0];if(c.defer)c.defer=!1,this.Qa.push(c);else switch(c.type){case "require":if(3!==Ee(this,c.ca).status&&!a)return;break;case "set":sa(c.zb[0],function(e,g){b.Kd[e]=g});break;case "config":var d=c.zb[0];Ee(this,c.ca).oc={};Fe(this,H.R,d,c);Ee(this,c.ca).oc=d;break;case "event":Fe(this,c.zb[1],c.zb[0],c)}this.Qa.shift()}};var Ge=/[A-Z]+/,He=/\s/,Ie=function(a){if(ja(a)&&(a=wa(a),!He.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ge.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ja:d}}}}},Ke=function(a){for(var b={},c=0;c<a.length;++c){var d=Ie(a[c]);d&&(b[d.id]=d)}Je(b);var e=[];sa(b,function(g,h){e.push(h)});return e};
function Je(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ja[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Le={};var Me=null,Ne={},Oe={},Qe,Re=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Ub]&&(c.eventCallback=b[H.Ub]),b[H.Wb]&&(c.eventTimeout=b[H.Wb]));return c};
var Xe={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ia(a[2]))return;c=a[2]}var d=Re(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];Le[b]||(Le[b]=[]);Le[b].push(c)}},set:function(a){var b;2==a.length&&Ia(a[1])?b=f(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b){b.eventModel=f(b);b.event="gtag.set";b._clear=!0;return b}}},Ye={policy:!0};var $e=function(a){return Ze?A.querySelectorAll(a):null},af=function(a,b){if(!Ze)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!A.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},bf=!1;if(A.querySelectorAll)try{var cf=A.querySelectorAll(":root");cf&&1==cf.length&&cf[0]==A.documentElement&&(bf=!0)}catch(a){}var Ze=bf;var kf=function(a){if(jf(a))return a;this.Og=a};kf.prototype.Of=function(){return this.Og};var jf=function(a){return!a||"object"!==Ga(a)||Ia(a)?!1:"getUntrustedUpdateValue"in a};kf.prototype.getUntrustedUpdateValue=kf.prototype.Of;var lf=!1,mf=[];function nf(){if(!lf){lf=!0;for(var a=0;a<mf.length;a++)D(mf[a])}}var of=function(a){lf?D(a):mf.push(a)};var pf=[],qf=!1,rf=function(a){return u["dataLayer"].push(a)},sf=function(a){var b=yc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},uf=function(a){var b=a._clear;sa(a,function(g,h){"_clear"!==g&&(b&&td(g,void 0),td(g,h))});Ec||(Ec=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Kc(),a["gtm.uniqueEventId"]=d,td("gtm.uniqueEventId",d));Gc=c;var e=tf(a);
Gc=null;switch(c){case "gtag.set":e&&cb("GTM",18);break;case "gtm.init":cb("GTM",19),e&&cb("GTM",20)}return e};function tf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=yc.zones;d=e?e.checkState(xc.i,c):Dd;return d.active?ve(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var vf=function(){for(var a=!1;!qf&&0<pf.length;){qf=!0;delete id.eventModel;ld();var b=pf.shift();if(null!=b){var c=jf(b);if(c){var d=b;b=jf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=md(h,1);if(la(k)||Ia(k))k=f(k);jd[h]=k}}try{if(ia(b))try{b.call(nd)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ja(b[0])){var r=Xe[b[0]];if(r&&(!c||!Ye[b[0]])){b=r(b);break a}}b=void 0}if(!b){qf=!1;continue}}a=uf(b)||a}}finally{c&&ld(!0)}}qf=!1}
return!a},wf=function(){var a=vf();try{var b=xc.i,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},xf=function(){var a=Ma("dataLayer",[]),b=Ma("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});of(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<yc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new kf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);pf.push.apply(pf,d);if(300<this.length)for(cb("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return vf()&&h};pf.push.apply(pf,a.slice(0));D(wf)};var yf;var Uf={};Uf.tb=new String("undefined");
var Vf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Uf.tb?b:a[d]);return c.join("")}};Vf.prototype.toString=function(){return this.resolve("undefined")};Vf.prototype.valueOf=Vf.prototype.toString;Uf.Qe=Vf;Uf.hc={};Uf.zf=function(a){return new Vf(a)};var Wf={};Uf.xg=function(a,b){var c=Kc();Wf[c]=[a,b];return c};Uf.Bd=function(a){var b=a?0:1;return function(c){var d=Wf[c];if(d&&"function"===typeof d[b])d[b]();Wf[c]=void 0}};Uf.ag=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Uf.kg=function(a){if(a===Uf.tb)return a;var b=Kc();Uf.hc[b]=a;return'google_tag_manager["'+xc.i+'"].macro('+b+")"};Uf.eg=function(a,b,c){a instanceof Uf.Qe&&(a=a.resolve(Uf.xg(b,c)),b=ha);return{xc:a,J:b}};var Xf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Va(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Yf=function(a){yc.hasOwnProperty("autoEventsSettings")||(yc.autoEventsSettings={});var b=yc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Zf=function(a,b,c){Yf(a)[b]=c},$f=function(a,b,c,d){var e=Yf(a),g=ya(e,b,d);e[b]=c(g)},ag=function(a,b,c){var d=Yf(a);return ya(d,b,c)};var bg=function(){for(var a=Ka.userAgent+(A.cookie||"")+(A.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(xa()/1E3)].join(".")},eg=function(a,b,c,d){var e=cg(b);return nb(a,e,dg(c),d)},cg=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},dg=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function fg(a,b){var c=""+cg(a),d=dg(b);1<d&&(c+="-"+d);return c};var gg=["1"],hg={},lg=function(a,b,c,d){var e=ig(a);hg[e]||jg(e,b,c)||(kg(e,bg(),b,c,d),jg(e,b,c))};function kg(a,b,c,d,e){var g;g=["1",fg(d,c),b].join(".");rb(a,g,c,d,0==e?void 0:new Date(xa()+1E3*(void 0==e?7776E3:e)))}function jg(a,b,c){var d=eg(a,b,c,gg);d&&(hg[a]=d);return d}function ig(a){return(a||"_gcl")+"_au"};var mg=function(){for(var a=[],b=A.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Tc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Tc]||(g[a[h].Tc]=[]),g[a[h].Tc].push({timestamp:k[1],Lf:k[2]}))}return g};function ng(){for(var a=og,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function pg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var og,qg,rg=function(a){og=og||pg();qg=qg||ng();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(og[l],og[m],og[n],og[q])}return b.join("")},sg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=qg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}og=og||pg();qg=qg||
ng();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var tg;function ug(a,b){if(!a||b===A.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var yg=function(){var a=vg,b=wg,c=xg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ta(A,"mousedown",d);Ta(A,"keyup",d);Ta(A,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},xg=function(){var a=Ma("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var zg=/(.*?)\*(.*?)\*(.*)/,Ag=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Bg=/^(?:www\.|m\.|amp\.)+/,Cg=/([^?#]+)(\?[^#]*)?(#.*)?/,Dg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Fg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(rg(String(d))))}var e=b.join("*");return["1",Eg(e),e].join("*")},Eg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=tg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}tg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^tg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Hg=function(){return function(a){var b=jb(u.location.href),c=b.search.replace("?",""),d=fb(c,"_gl",!0)||"";a.query=Gg(d)||{};var e=ib(b,"fragment").match(Dg);a.fragment=Gg(e&&e[3]||
"")||{}}},Gg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=zg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Eg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=sg(t[p+1]);return q}}}}catch(r){}};
function Ig(a,b,c){function d(m){var n=m,q=Dg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Cg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Jg(a,b,c){for(var d={},e={},g=xg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&ug(k.domains,b)&&(k.fragment?Aa(e,k.callback()):Aa(d,k.callback()))}if(Ca(d)){var l=Fg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=A.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Ig(l,a.action);ab.test(v)&&(a.action=v)}}}else Kg(l,a,!1)}if(!c&&Ca(e)){var w=Fg(e);Kg(w,a,!0)}}function Kg(a,b,c){if(b.href){var d=Ig(a,b.href,void 0===c?!1:c);ab.test(d)&&(b.href=d)}}
var vg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Jg(e,e.hostname,!1)}}catch(h){}},wg=function(a){try{if(a.action){var b=ib(jb(a.action),"host");Jg(a,b,!0)}}catch(c){}},Lg=function(a,b,c,d){yg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};xg().decorators.push(e)},Mg=function(){var a=A.location.hostname,b=Ag.exec(A.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Bg,"")===e.replace(Bg,"")},Ng=function(a,b){return!1===a?!1:a||b||Mg()};var Og={};var Pg=/^\w+$/,Qg=/^[\w-]+$/,Rg=/^~?[\w-]+$/,Sg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Tg(a){return a&&"string"==typeof a&&a.match(Pg)?a:"_gcl"}var Vg=function(){var a=jb(u.location.href),b=ib(a,"query",!1,void 0,"gclid"),c=ib(a,"query",!1,void 0,"gclsrc"),d=ib(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||fb(e,"gclid",void 0);c=c||fb(e,"gclsrc",void 0)}return Ug(b,c,d)};
function Ug(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Qg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Og.gtm_3pds?0:Og.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Wg(a,b,c){function d(q,t){var p=Xg(q,e);p&&rb(p,t,h,g,l,!0)}b=b||{};var e=Tg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Td?7776E3:b.Td;c=c||xa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.vh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Xg=function(a,b){var c=Sg[a];if(void 0!==c)return b+c},Yg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Zg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var $g=function(a,b,c,d,e){if(la(b)){var g=Tg(e);Lg(function(){for(var h={},k=0;k<a.length;++k){var l=Xg(a[k],g);if(l){var m=kb(l,A.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ah=function(a){return a.filter(function(b){return Rg.test(b)})},bh=function(a){for(var b=["aw","dc"],c=Tg(a&&a.prefix),d={},e=0;e<b.length;e++)Sg[b[e]]&&(d[b[e]]=Sg[b[e]]);sa(d,function(g,h){var k=kb(c+h,A.cookie);if(k.length){var l=k[0],m=Yg(l),n={};n[g]=[Zg(l)];Wg(n,a,m)}})};var ch=/^\d+\.fls\.doubleclick\.net$/;function dh(a){var b=jb(u.location.href),c=ib(b,"host",!1);if(c&&c.match(ch)){var d=ib(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function fh(a,b){if("aw"==a||"dc"==a){var c=dh("gcl"+a);if(c)return c.split(".")}var d=Tg(b);if("_gcl"==d){var e;e=Vg()[a]||[];if(0<e.length)return e}var g=Xg(a,d),h;if(g){var k=[];if(A.cookie){var l=kb(g,A.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Zg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=ah(k)}else h=k}else h=k}else h=[];return h}
var gh=function(){var a=dh("gac");if(a)return decodeURIComponent(a);var b=mg(),c=[];sa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Lf);g=ah(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},hh=function(a,b,c,d,e){lg(b,c,d,e);var g=hg[ig(b)],h=Vg().dc||[],k=!1;if(g&&0<h.length){var l=yc.joined_au=yc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="http://ad.doubleclick.net/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Ka.sendBeacon&&Ka.sendBeacon(t)||Sa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=ig(b),r=hg[p];r&&kg(p,r,c,d,e)}};var ih;if(3===xc.xb.length)ih="g";else{var jh="G";ih=jh}
var kh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ih,OPT:"o"},lh=function(a){var b=xc.i.split("-"),c=b[0].toUpperCase(),d=kh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===xc.xb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+xc.xb+e};
var mh=function(a){return!(void 0===a||null===a||0===(a+"").length)},nh=function(a,b){var c;if(2===b.M)return a("ord",oa(1E11,1E13)),!0;if(3===b.M)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.M)return mh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.M)c="1";else if(6===b.M)c=b.Oc;else return!1;mh(c)&&a("qty",c);mh(b.Bb)&&a("cost",b.Bb);mh(b.transactionId)&&a("ord",b.transactionId);return!0},oh=encodeURIComponent,ph=function(a,b){function c(n,q,t){g.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(t?q:oh(q)))}var d=a.uc,e=a.protocol;e+=a.Lb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+oh(d)+(";type="+oh(a.wc))+(";cat="+oh(a.Pa));var g=a.Bf||{};sa(g,function(n,q){e+=";"+oh(n)+"="+oh(q+"")});if(nh(c,a)){mh(a.Qb)&&c("u",a.Qb);mh(a.Pb)&&c("tran",a.Pb);c("gtm",lh());!1===a.Ze&&c("npa","1");if(a.qc){var h=fh("dc",a.xa);h&&h.length&&c("gcldc",h.join("."));var k=fh("aw",a.xa);k&&k.length&&c("gclaw",k.join("."));var l=gh();l&&c("gac",l);lg(a.xa,void 0,a.xf,a.yf);
var m=hg[ig(a.xa)];m&&c("auiddc",m)}mh(a.Kc)&&c("prd",a.Kc,!0);sa(a.Vc,function(n,q){c(n,q)});e+=b||"";mh(a.Jb)&&c("~oref",a.Jb);a.Lb?Ra(e+"?",a.J):Sa(e+"?",a.J,a.O)}else D(a.O)};var qh=["input","select","textarea"],rh=["button","hidden","image","reset","submit"],sh=function(a){var b=a.tagName.toLowerCase();return!na(qh,function(c){return c===b})||"input"===b&&na(rh,function(c){return c===a.type.toLowerCase()})?!1:!0},th=function(a){return a.form?a.form.tagName?a.form:A.getElementById(a.form):Za(a,["form"],100)},uh=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(sh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var xh=!!u.MutationObserver,yh=void 0,zh=function(a){if(!yh){var b=function(){var c=A.body;if(c)if(xh)(new MutationObserver(function(){for(var e=0;e<yh.length;e++)D(yh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ta(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<yh.length;e++)D(yh[e])}))})}};yh=[];A.body?b():D(b)}yh.push(a)};var ai=u.clearTimeout,bi=u.setTimeout,K=function(a,b,c){if(ye()){b&&D(b)}else return Pa(a,b,c)},ci=function(){return new Date},di=function(){return u.location.href},ei=function(a){return ib(jb(a),"fragment")},fi=function(a){return hb(jb(a))},gi=null;
var hi=function(a,b){return md(a,b||2)},ii=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return rf(a)},ji=function(a,b){u[a]=b},L=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},ki=function(a,b,c){return kb(a,b,void 0===c?!0:!!c)},li=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Td:d},g=Vg();Wg(g,e);bh(e)},mi=function(a,b,c,d,e){var g=Hg(),h=xg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(Aa(k,l.query),Aa(k,l.fragment));for(var m=Tg(b),n=0;n<a.length;++n){var q=a[n];if(void 0!==Sg[q]){var t=Xg(q,m),p=k[t];if(p){var r=Math.min(Yg(p),xa()),v;b:{for(var w=r,y=kb(t,A.cookie),x=0;x<y.length;++x)if(Yg(y[x])>w){v=!0;break b}v=!1}v||rb(t,p,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Wg(Ug(k.gclid,k.gclsrc),z);},ni=function(a,b,c,d,e){$g(a,b,c,d,e);},
oi=function(a,b){if(ye()){b&&D(b)}else Ra(a,b)},pi=function(a){return!!ag(a,"init",!1)},qi=function(a){Zf(a,"init",!0)},ri=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Dc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&sa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(G("https://","http://",d))},si=function(a,b){var c=a[b];return c};
var ui=Uf.eg;var vi=new qa,wi=function(a,b){function c(h){var k=jb(h),l=ib(k,"protocol"),m=ib(k,"host",!0),n=ib(k,"port"),q=ib(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},xi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(xi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=vi.get(p);r||(r=new RegExp(c,t),vi.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return wi(b,c)}return!1};var zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ai={},Bi=encodeURI,Y=encodeURIComponent,Ci=Sa;var Di=function(a,b){if(!a)return!1;var c=ib(jb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Ei=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Ai.bg=function(){var a=!1;return a};var Fi=function(){var a=!1;return a};var ej=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var wj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},xj=function(){this.c=1;this.e=[];this.p2=this.p=null};function yj(a){var b=yc,c=b.gss=b.gss||{};return c[a]=c[a]||new xj}
var zj=function(a){if(yj(a).p&&!yj(a).p2){var b=yj(a).p;yj(a).p2=function(c,d,e){b(c,d,e.eventModel)}}return yj(a).p2},Aj=function(a,b){yj(a).p2=b;yj(a).p=function(c,d,e){return b(c,d,new xe(e))}},Bj=function(a){var b=yj(a),c=zj(a);if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,new xe(l.p))}catch(m){}};g(d);g(e)}};var Mj=window,Nj=document,Oj=function(a){var b=Mj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mj["ga-disable-"+a])return!0;try{var c=Mj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=kb("AMP_TOKEN",Nj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Nj.getElementById("__gaOptOutExtension")?!0:!1};var Tj=!1;Tj=!0;
var Vj=function(a,b,c){if(Tj)ze().push("event",[c,b],a,void 0);else{Uj(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,void 0));Bj(a)}},Wj=function(a,b,c){if(Tj)ze().push("event",[c,b],a,!0);else{Uj(a);var d=Math.floor(xa()/1E3);yj(a).e.push(new wj(b,d,c,!0))}},Uj=function(a){if(1===yj(a).c&&(yj(a).c=2,!ye())){var b=encodeURIComponent(a);Pa(("http:"!=u.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Yj=function(a,b){},Xj=function(a,b){},Zj=function(a){return"_"===a.charAt(0)},ak=function(a){sa(a,function(c){Zj(c)&&
delete a[c]});var b=a[H.sb]||{};sa(b,function(c){Zj(c)&&delete b[c]})};var Z={a:{}};

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;ph(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Ei(b.vtp_customVariable||[],"key","value")||{},e={Pa:b.vtp_activityTag,qc:c,xa:b.vtp_conversionCookiePrefix||void 0,Bb:void 0,M:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,uc:b.vtp_advertiserId,wc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,
Jb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Oc:void 0,Lb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Pb:b.vtp_transactionVariable,transactionId:void 0,Qb:b.vtp_userVariable,Vc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){K("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,L("google_attr").build([Ei(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=a.vtp_gtmOnFailure;Td();K("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=L("google_trackConversion");if(ia(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Ei(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),
a.vtp_eventValue&&(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:lh()})||b()}else b()},b)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(vd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=hi("gtm.referrer",1)||A.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ib(jb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):fi(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Xf(c,"gtm.click");ii(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!pi("cl")){var c=L("document");Ta(c,"click",a,!0);qi("cl")}D(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=L(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return ki(a.vtp_name,hi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;ph(b,c)}(function(b){Z.__fls=b;Z.__fls.b="fls";Z.__fls.g=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(q){q=q||[];for(var t=[],p=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],r=0;r<q.length;r++)for(var v=0;v<p.length;v++){var w=p[v],y=q[r][w[1]];void 0!==y&&t.push(w[0]+
(r+1)+":"+Y(y))}return t.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(hi("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),g=0;g<e.length;g++){var h=e[g].split(":");h[1]=h[1]&&Y(h[1])||"";e[g]=h.join(":")}c=e.join("|")}}var k=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Ei(b.vtp_customVariable||
[],"key","value")||{},m={Pa:b.vtp_activityTag,qc:k,xa:b.vtp_conversionCookiePrefix||void 0,Bb:b.vtp_revenue,M:"ITEM_SOLD"===b.vtp_countingMethod?6:5,uc:b.vtp_advertiserId,wc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,Jb:b.vtp_useImageTag?void 0:b.vtp_url,Kc:c,protocol:"",Oc:b.vtp_quantity,Lb:!b.vtp_useImageTag,Pb:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Qb:b.vtp_userVariable,Vc:l};if(b.vtp_enableAttribution){var n=b.vtp_attributionFields||[];if(n.length){K("//www.gstatic.com/attribution/collection/attributiontools.js",
function(){a(m,L("google_attr").build([Ei(n,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(m)})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:hi("gtm.url",1))||di();var d=b[a("vtp_component")];if(!d||"URL"==d)return fi(String(c));var e=jb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=ib(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=ib(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=hi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();



Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){D(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
Mg())&&mi(a,h,k,l));li(e,c,d);hh(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");ni(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(p,r){var v=!1,w;var y=vd(p,"gtm");if(!y)return;v=!0;w=y[r];v||(w=hi("gtm."+r,1));return w}function b(p,r,v,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,r,v){var w=a(p,t[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;
var v=e(di());la(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Di(p,w)}function e(p){m.test(p)||(p="http://"+p);return ib(jb(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+p,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,
"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||v;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Va(p,"value");case "button":return Wa(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)sh(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&Va(w,r)||v}var m=/^https?:\/\//i,
n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=
a(r,"element");return y&&y.tagName||v;case "TEXT":return b(r,w,Wa)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),C=jb(z),B=String(p.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=ib(C,B,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var F=p.vtp_attribute,P=a(r,"element");E=P&&Va(P,F)||v||""}return E;case "MD":var U=p.vtp_mdValue,
R=b(r,"MD",Nh);return U&&R?Qh(R,U)||v:R||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=L("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Td();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:lh()},m=function(t){return function(p,r,v){var w="DATA_LAYER"==t?hi(v):k[r];w&&(l[p]=w)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var q=!0;q&&b.push(l);a||(a=!0,K("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();





Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=A.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){D(h)}}}var b=function(d,e,g){Kd(function(){var h,k=yc;k.postscribe||(k.postscribe=kc);h=k.postscribe;var l={done:e},m=A.createElement("div");m.style.display="none";m.style.visibility="hidden";A.body.appendChild(m);try{h(m,d,l)}catch(n){D(g)}})};var c=function(d){if(A.body){var e=
d.vtp_gtmOnFailure,g=ui(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.xc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(A.body,Xa(h),k,e)()}else bi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();



Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Xa('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ci(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var bk={};bk.macro=function(a){if(Uf.hc.hasOwnProperty(a))return Uf.hc[a]},bk.onHtmlSuccess=Uf.Bd(!0),bk.onHtmlFailure=Uf.Bd(!1);bk.dataLayer=nd;bk.callback=function(a){Ic.hasOwnProperty(a)&&ia(Ic[a])&&Ic[a]();delete Ic[a]};bk.jf=function(){yc[xc.i]=bk;Aa(Jc,Z.a);Xb=Xb||Uf;Yb=Cd};
bk.Xf=function(){Og.gtm_3pds=!0;yc=u.google_tag_manager=u.google_tag_manager||{};if(yc[xc.i]){var a=yc.zones;a&&a.unregisterChild(xc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Qb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Rb.push(q)}Vb=Z;Wb=xi;bk.jf();xf();Fd=!1;Gd=0;if("interactive"==A.readyState&&!A.createEventObject||"complete"==A.readyState)Id();else{Ta(A,"DOMContentLoaded",Id);Ta(A,"readystatechange",Id);if(A.createEventObject&&A.documentElement.doScroll){var p=!0;try{p=!u.frameElement}catch(y){}p&&Jd()}Ta(u,"load",Id)}lf=!1;"complete"===A.readyState?nf():
Ta(u,"load",nf);a:{if(!cd)break a;u.setInterval(dd,864E5);}
Fc=(new Date).getTime();}};(0,bk.Xf)();

})()
