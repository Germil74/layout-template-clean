module.exports = function(){
 /*   $.handlebars.registerPartial('footer', '<footer>the end!!!!</footer>')*/
    $.handlebars.registerHelper('capitals', function(str){
        return str.toUpperCase()
    })
    $.handlebars.registerHelper('lower', function(str){
        return str.toLowerCase()
    })
    $.handlebars.registerHelper('encodeURI', function(str){
        return encodeURIComponent(str)
    })
    $.handlebars.registerHelper('icon', function (name, mod) {
        var mod = typeof mod === "object" ? '' : mod
        return new $.handlebars.SafeString(`<svg class="icon icon-${name} ${mod}"><use xlink:href="static/img/svg/symbol/sprite.svg#${name}"></use></svg>`);
    })

}

