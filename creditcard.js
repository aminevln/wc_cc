const template = document.createElement('template')
template.innerHTML = 
`
<div id="container">
    <div id="farmName"> Firas S.r.l </div>
        <div id="sim">
            <div></div>
            <div></div>
            <div></div>
        </div>
    <div id="circuit">
        <img src="IMG/visa.webp" alt="" srcset="">
    </div>
</div>
`

class creditCard extends HTMLElement{
    constructor(){
        super();
    }
    async connectedCallback(){
        const shadow = this.attachShadow({mode : "open"})
        let css = await (await fetch("cc.css")).text();
        template.innerHTML = 
        `
        <style>${css}</style>
        <div id="container">
            <div id="farmName"> Firas S.r.l </div>
                <div id="sim">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div id="circuit">
                <img src="IMG/visa.webp" alt="" srcset="">
            </div>
        </div>
        `
        shadow.append(template.content.cloneNode(true))
    }
}
customElements.define("credit-card", creditCard)