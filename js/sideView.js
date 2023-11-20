AFRAME.registerComponent("side-view",{
    init : function(){
        this.createPlaces()
    },
    createPlaces : function(){
        const sideViewContainer = document.querySelector("#side-view-container")

        let previousXposition = -150
        let previousYposition = 30

        for (var i; i <=4; i ++){
            const position = {
                x : (previousXposition += 50),
                y : (previousYposition += 2 ),
                z : -40
            }
            const entityEl = this.createPlaceThumbnail(position, i)
            sideViewContainer.appendChild(entityEl)
        }
    },
    createPlaceThumbnail : function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("id", `place-${id}.jpg`)
        entityEl.setAttribute("geometry",{
            primitive : "circle",
            radius : 2.5
        })

        entityEl.setAttribute("material", {
            src : "",
            opacity : 0.9
        })
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("cursor-listener", {})

        return entityEl
    }
})