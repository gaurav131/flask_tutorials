document.getElementById("add").addEventListener("click", handleClick)

function handleClick(){
    const name = document.getElementById("name").value
    fetch("/"+name).then(data => data.json()).then(processNames)
}

function processNames(data){
    for (let i of data["names"]){
        console.log(i)
    }
}