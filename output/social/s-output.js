setTimeout( function() {
    $("#card-container").append(
    `<div id="text">
    WE CORDIALLY INVITE YOU FOR
    </div>`
    +`<div id="event">`+
    localStorage.getItem("event")
    +`</div>
    <div id="organzer">Hosted by `+
    localStorage.getItem("organzer")
    +`</div>
    <div id="p-adress">Adress: `+
    localStorage.getItem("adress")
    +`</div>
    <div id="p-date">On: `+
    localStorage.getItem("date")
    +`</div>`)
},500)
