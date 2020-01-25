module.exports = {
    pages: {
        files: [
            { expand: true, cwd: 'src/',  src: ['**/*.html', '*CNAME', '*.txt', '*.xml', '*.htm', 'assets/css/*.css'],                           dest: 'dist' },
        ],
    },
    static: {
        files: [
            { expand: true, cwd: 'src/',  src: ['assets/static/*'],                           dest: 'dist' },
        ],
    },
    css: {
        files: [
            { expand: true, cwd: 'src/',  src: ['assets/css/*.css'],                           dest: 'dist' },
        ],
    },
    js: {
        files: [
            { expand: true, cwd: 'src/',  src: ['assets/js/*.js'],                           dest: 'dist' },
        ],
    },
};
