function viewSeccionHabilidades() {
    
  observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      // console.log(entries[0].isIntersecting === true);
      if (entries[0].isIntersecting === true) {
        const barras = document.querySelectorAll(".skill-bar");

        barras.forEach((barra) => {
          barra.style.display = "block";
        });

        observer.disconnect();
      }
    },
    { threshold: [0] }
  );

  observer.observe(document.getElementById("set-habilidades"));
}
