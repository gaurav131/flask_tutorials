document.getElementById("add").addEventListener("click", handleClick)

function handleClick(){
    const name = document.getElementById("name").value
    fetch("/"+name).then(data => data.json()).then(processNames)
}

function processNames(data){
    const nameList = document.getElementById("nameList")
    for (let i of data["names"]){
        const listElement = document.createElement("li")
        listElement.innerText = i
        nameList.appendChild(listElement)
    }
}