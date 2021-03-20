document.getElementById("add").addEventListener("click", handleClick)

function handleClick(){
    const name = document.getElementById("name").value
    console.log(name)
    fetch("/"+name).then(data => data.json()).then(processNames)
}

function processNames(data){
    console.log(data)
}