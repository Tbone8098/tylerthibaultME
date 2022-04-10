

function getEgg() {
    let egg = localStorage.getItem('egg')
    egg = JSON.parse(egg)
    return egg
}

function setEgg(data) {
    if (data) {
        let egg = getEgg()
        if (!egg){
            egg = {}
        }
        for (const key in data) {
            if (data.hasOwnProperty(key)){
                egg[key] = data[key]
            }
        }
        localStorage.setItem('egg', JSON.stringify(egg))

        return true
    }
    console.log("failed to set Egg");
    return false
}

export {
    getEgg,
    setEgg,
}