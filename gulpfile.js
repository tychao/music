var gulp=require("gulp");
var connect=require("gulp-connect");
var less=require("gulp-less");

//把src的html放到dist下面
gulp.task("html",function(){
       gulp.src("./src/index.html")//读取src下面的index
                                  .pipe(gulp.dest("./dist"));//把文件变成流文件，通过gulp管道。把src的html放到dist下面
    })
//监听文件变化
    gulp.task("watch",function(){
        gulp.watch("./src/index.html",["html"])
        gulp.watch("./src/less/*.less",["less"])
        gulp.watch("./src/js/*.js",["js"])   
 })
//开启服务器
    gulp.task("server",function(){
         connect.server({
            root:"./dist",
            porter:8091,
            liverloader:true
    })
    })
  //把less转换成css
  gulp.task("less",function(){
      gulp.src("./src/less/*.less")
     .pipe(connect.reload())
      .pipe(less())
      .pipe(gulp.dest("./dist/css"));
  })
  //转移js
  gulp.task("js",function(){
    gulp.src("./src/js/*.js")
    .pipe(connect.reload())
    .pipe(gulp.dest("./dist/js"))
       })
gulp.task("default",["html","watch","server","less","js"])
