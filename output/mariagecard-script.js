setTimeout(function() {
    $("#card-container").append(
    `<div id="text">
    We are pleased to join us for a casual party to celebrate the love and marriage of our brides
    </div>`
    +`<div id="h-name">`+
    localStorage.getItem("husband-name")
    +`</div><div id="and">&</div>
    <div id="w-name">`+
    localStorage.getItem("wife-name")
    +`</div>
    <div id="m-adress">Adress: `+
    localStorage.getItem("adress")
    +`</div>
    <div id="m-date">On: `+
    localStorage.getItem("date")
    +`</div>`)    
},500)



