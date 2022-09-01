console.log("js is running");

document.querySelector(".cross").style.display="none";
document.querySelector(".hamberger").addEventListener("click", ()=>{
    document.querySelector(".sidebar").classList.toggle("sidebar-go");
    if (document.querySelector(".sidebar").classList.contains("sidebar-go")) {
        document.querySelector(".ham").style.display="inline";
        document.querySelector(".cross").style.display="none";
    } else {
      setTimeout(() => {
        document.querySelector(".cross").style.display="inline";
      }, 350);
      
        document.querySelector(".ham").style.display="none";
      
    }
})