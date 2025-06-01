var posts=["2023/01/20/fiddler-1/","2022/08/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };