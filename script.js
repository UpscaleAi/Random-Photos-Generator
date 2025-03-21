const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
    addNewImage()

})
function addNewImage(){
    const newImgEl = document.createElement("img")
    newImgEl.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`
    imageContainerEl.appendChild(newImgEl)
}
