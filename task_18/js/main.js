var util = require('./util');
console.log(util);
(function (root,factory) {
    console.log(root);
    factory(root);
})(document, function(root){

    var content = util.getElementsByClassName(root, 'content');
    var text = content[0].getElementsByTagName('input'),
        pushLeft = util.getElementsByClassName(root, 'pushLeft'),
        pushRight = util.getElementsByClassName(root, 'pushRight'),
        popLeft = util.getElementsByClassName(root, 'popLeft'),
        popRight = util.getElementsByClassName(root, 'popRight');

    var queue = util.getElementsByClassName(root, 'queue');
    console.log(content, queue);
});
