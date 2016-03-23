// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

// 让所有文件，都使用相对路径。
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('*', {
    useHash: false,
    release: '/$0',
    relative: true
});

// npm install [-g] fis3-hook-commonjs
fis.hook('module', {
    mode: 'commonJs'
});
fis.match('*.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    useMap: true,
    useHash: false,
    wrap: 'amd'
});
fis.match('**/mod.js', {
    isMod: false,
    wrap: false
});
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
})
// npm install -g fis-parser-less-2.x
fis.match('**/*.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});
