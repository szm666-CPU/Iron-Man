      const p = document.querySelector("p");
      p.addEventListener("click", () => {
        p.textContent = "测试区域被点击";
        p.style.color = "red";
        let timeoutId = null;
        if (timeoutId)  clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            p.textContent = "仅为测试区域";
            p.style.color = "black";
        }, 2000)
      });