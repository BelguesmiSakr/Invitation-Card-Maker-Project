$("#submit-button").on("click",function() {
    localStorage.setItem("husband-name",$("#husband-name").val())
    localStorage.setItem("wife-name",$("#wife-name").val())
    localStorage.setItem("adress",$("#adress").val())
    localStorage.setItem("date",$("#date").val())
})
