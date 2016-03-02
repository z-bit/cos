module.exports = {
    build_dir: 'dist.dev',

    app_files: {
        scripts: ['app_grunt/**/*.js'],
        partials: ['app_grunt//*.html'],
        index: ['gruntIndex.html']
    },

    vendor_files: {
        scripts: [
            'node_modules/angular/angular.min.js'
        ]
    }
}