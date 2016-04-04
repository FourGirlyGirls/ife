<<<<<<< HEAD
var util = require('./util');
=======
define('task_18/js/main', function(require, exports, module) {

<<<<<<< HEAD
var util = require('task_18/js/util');
<<<<<<< HEAD
=======
define('task_18/js/main', function(require, exports, module) {

var util = require('task_18/js/util');
=======
>>>>>>> 0606bf9652c4c08c9bc37bff3d06b8fb7d48bd16
>>>>>>> 0d83d4daee4b459a51efa077e1ca522770cf51dd
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
<<<<<<< HEAD
=======
<<<<<<< HEAD


});
>>>>>>> 0d83d4daee4b459a51efa077e1ca522770cf51dd
=======
>>>>>>> 0606bf9652c4c08c9bc37bff3d06b8fb7d48bd16


});
>>>>>>> 0d83d4daee4b459a51efa077e1ca522770cf51dd
