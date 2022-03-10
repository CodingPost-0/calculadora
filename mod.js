function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "index.css") {
      theme.href = "indez-2.css";
    } else {
      theme.href = "index.css";
    }
  }