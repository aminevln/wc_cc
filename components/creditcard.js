export default class creditCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.render()
    }
    render(){
        this.shadowRoot.innerHTML = "<p>funziona?</p>"
    }
}