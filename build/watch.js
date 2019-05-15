module.exports = function (grunt) {
  return {
    html: {
      files: ['src/**/*.html'],
      tasks: ['copy'],
    },
    sass: {
      files: ['src/sass/*.scss'],
      tasks: ['stylelint', 'sass', 'postcss', 'cssmin', 'copy'],
    },
    css: {
      files: ['src/assets/css/*.css'],
      tasks: ['copy:css'],
    },
    js: {
      files: ['src/assets/js/*.js'],
      tasks: ['copy:js'],
    },
    images: {
      files: ['src/assets/images/**/*'],
      tasks: ['image'],
    },
    svg: {
      files: ['src/assets/svg/*'],
      tasks: ['svgmin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
