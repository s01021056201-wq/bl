const redirect=sessionStorage.getItem("astralis_redirect");
if(redirect){
  sessionStorage.removeItem("astralis_redirect");
  history.replaceState(null,"",redirect);
}