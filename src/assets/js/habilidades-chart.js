function viewSeccionHabilidades() {
    var observer = new IntersectionObserver(function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        console.log(entries[0].isIntersecting === true);
        if (entries[0].isIntersecting === true)
            document.getElementById("set-habilidades").style.display = 'block';
    }, { threshold: [0] });

    observer.observe(document.getElementById("habilidades"));
}