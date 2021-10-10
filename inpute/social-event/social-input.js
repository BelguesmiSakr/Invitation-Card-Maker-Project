$("#submit-button").on("click",function() {
    localStorage.setItem("event",$("#event").val())
    localStorage.setItem("organzer",$("#organzer").val())
    localStorage.setItem("adress",$("#adress").val())
    localStorage.setItem("date",$("#date").val())
})