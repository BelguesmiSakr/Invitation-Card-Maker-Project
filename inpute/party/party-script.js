$("#submit-button").on("click",function() {
    localStorage.setItem("party-type",$("#party-type").val())
    localStorage.setItem("organzer",$("#organzer").val())
    localStorage.setItem("adress",$("#adress").val())
    localStorage.setItem("date",$("#date").val())
})