var rep = function(src){
  src.innerHTML = src.innerHTML.replace(/いいね！/g, 'プッ！'); 
};
rep(document.body);
document.body.addEventListener('DOMNodeInserted', function(ev){
  rep(ev.target);
});
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
