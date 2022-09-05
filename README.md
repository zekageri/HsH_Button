# HsH_Button
This is a custom HTML element which will simplify the button creation

- Created only with pure javascript. ( No dependency except the stlyesheet )
- on("click"), on("hover") event callback handle
- Setter / getter for text.
- Mobile friendly and fully responsive
- Setter for loading state.

Feature goals:
- Add dark / light mode.

HTML formats: 
```HTML
<hs-button id="hsBtnTest">Hs Button</hs-button>
<hs-button class="success" id="hsBtnTest1">Hs Button</hs-button>
<hs-button class="info" id="hsBtnTest2">Hs Button</hs-button>
<hs-button class="warning" id="hsBtnTest3">Hs Button</hs-button>
<hs-button class="error" id="hsBtnTest4">Hs Button</hs-button>
```

  Test:

```JS
// Grab all the buttons
let allButton = document.querySelectorAll("hs-button");
for (const btn of allButton) {

    // Add click event listener
    btn.on("click",function(id,event){
        console.log("Clicked on hs button: ", id);
        btn.toggleLoad();
    });
    
    // Add hover and leave evnet listeners
    btn.on("hover",function(type,id,event){
        console.log("Hs-button event: ", type);
    });

}
```
