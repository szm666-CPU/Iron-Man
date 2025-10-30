const p = document.querySelector("p");
let timeoutId = null;
p.addEventListener("click", (e) => {
  e.stopPropagation();
  p.textContent = "测试区域被点击";
  p.style.color = "red";
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    p.textContent = "仅为测试区域";
    p.style.color = "black";
  }, 2000);
});
document.body.addEventListener("click", () => {
  if (timeoutId){
    clearTimeout(timeoutId);
    timeoutId = null;
    p.textContent = "仅为测试区域";
    p.style.color = "black";
  } 
});
