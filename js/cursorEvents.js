AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleClickEvents: function () {
      //Cursor 'click' Events
      this.el.addEventListener("click", evt => {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("tour");
  
        if (state === "places-list") {
          const id = this.el.getAttribute("id");
          if (placesId.includes(id)) {
            placesContainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
          }
        }
      });
    },
    handleViewState : function(){
        const el = this.el
        const id = el.getAttribute(id)

        const placesContainer= document.querySelector("#places-container")

        const {selectedItem} = placesContainer.getAttribute("cursor-listener")

        const sideViewPlacesId = ["place-1", "place-2", "place-3", "place-4"]

        if (sideViewPlacesId.includes(id)){
          placesContainer.setAttribute("tour",{
            state : "change-view"
          })
        }

        const skyEl = document.querySelector("#main-container")

        skyEl.setAttribute("material", {
          color : "#fff",
          src : `../assets/${selectedItem}/${id}.jpg`
        })
    },
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        const placesContainer = document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute('tour')
        if (state === "places-list"){
          this.handlePlacesListState();
        }
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  
  });
  