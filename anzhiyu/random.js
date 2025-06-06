var posts=["2023/01/20/fiddler-1/","2022/08/30/hello-world/","2025/06/01/using_vc/","2025/06/01/situation_puzzle/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };