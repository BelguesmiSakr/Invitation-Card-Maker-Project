$("#show-card").on("click",function() {
    $("#card-container").append(
    `<div id="text">
    You are invited to join us for a
    </div>`
    +`<div id="type">`+
    localStorage.getItem("party-type")
    +` Party</div>
    <div id="organzer">Organized by `+
    localStorage.getItem("organzer")
    +`</div>
    <div id="p-adress">Adress: `+
    localStorage.getItem("adress")
    +`</div>
    <div id="p-date">On: `+
    localStorage.getItem("date")
    +`</div>`)
})
