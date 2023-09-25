document.addEventListener("DOMContentLoaded", function() {
  const colors = ["red", "yellow", "green", "black"];
  const links = document.querySelectorAll(".navbox a");
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

  links.forEach(link => {
    link.addEventListener("click", function() {
      const randomColor = getRandomColor();
      this.style.color = randomColor;
    });
  });

  headings.forEach(heading => {
    heading.addEventListener("click", function() {
      const randomColor = getRandomColor();
      this.style.color = randomColor;
    });
  });

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
