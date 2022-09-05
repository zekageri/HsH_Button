class hsButton extends HTMLElement {
    id  = null;
    loader          = `<div class="hsLoader roller"></div>`;
    loadingState    = false;
    events = {
        "click": function(){},
        "hover": function(){}
    };
    connectedCallback() {
        this.id = this.getAttribute("id");
        if (!this.id) {
            console.error("[HSH-Button] - Button should have an ID.");
            return;
        }

        this.clickEventHandle();
        this.hoverEventHandle();
    }

    on(type, callback) {
        if( this.events.hasOwnProperty(type) ){
            this.events[type] = callback;
        }else {
            console.warn(`[HSH-Button] - No such event type on HsH Button. Event: ${type}`);
        }
    }

    clickEventHandle(){
        let self = this;
        this.addEventListener("click",function(e){
            self.events.click( self.id, e );
        });
    }

    hoverEventHandle(){
        let self = this;
        this.addEventListener("mouseenter",function(e){
            self.events.hover( "hover", self.id, e );
        });
        this.addEventListener("mouseleave",function(e){
            self.events.hover( "leave",self.id, e );
        });
    }

    setLoad(state = true){
        this.loadingState = state;
        if( state ){
            this.insertAdjacentHTML("beforeend",this.loader);
        }else{
            this.querySelector(".hsLoader").remove();
        }
    }

    toggleLoad(){
        if( this.loadingState ){
            this.querySelector(".hsLoader").remove();
            this.loadingState = false;
            return;
        }else if( !this.loadingState ){
            this.insertAdjacentHTML("beforeend",this.loader);
            this.loadingState = true;
            return;
        }
    }
};
customElements.define('hs-button', hsButton);