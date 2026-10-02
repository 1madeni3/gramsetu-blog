const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelector(".menu")?.addEventListener("click",()=>{
  const nav=document.querySelector(".nav nav");
  if(nav){ nav.style.display = nav.style.display === "flex" ? "" : "flex"; nav.style.position="absolute"; nav.style.top="78px"; nav.style.left="0"; nav.style.right="0"; nav.style.padding="20px 6vw"; nav.style.background="#f7f7f2"; nav.style.flexDirection="column"; }
});
