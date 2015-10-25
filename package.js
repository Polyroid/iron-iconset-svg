Package.describe({
    name: 'polyroid:iron-iconset-svg',
    version: '1.0.8',
    summary: 'Manages a set of svg icons',
    git: 'https://github.com/Polyroid/iron-iconset-svg.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:polymer@1.0.0',
        'polyroid:iron-meta@1.0.0'
    ], 'client');

    api.addAssets([
        'iron-iconset-svg.html'
    ], 'client');
});
