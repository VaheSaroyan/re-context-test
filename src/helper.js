import {setState,getState,handleStateChange} from "./context";

document.addEventListener('DOMContentLoaded',() =>{

    const container =  document.createElement("DIV")
    const button = document.createElement("BUTTON");
    const button2 = document.createElement("BUTTON");
    const text = document.createElement("P");

    button.innerHTML = "OK";
    button2.innerHTML = "dec";
    button.onclick = () => {
        setState({type: 'increment'})
    }
    button2.onclick = () => {
        setState({type: 'decrement'})
    }
    handleStateChange((data) => {
        text.innerText = JSON.stringify(data) + '---- --- --- '
    })
    text.innerText = JSON.stringify(getState()) + '---- --- --- '

    container.appendChild(button)
    container.appendChild(button2)
    container.appendChild(text)
    document.body.appendChild(container)
})
