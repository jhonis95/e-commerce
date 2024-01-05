
const headerBtnLeft=document.getElementById('header-navBtn-left')
const headerBtnRight=document.getElementById('header-navBtn-right')


const imageContainer=document.getElementById('header-background-image')
const imagesFromServer=JSON.parse(images)
let image=`data:image/jpg;base64, ${imagesFromServer.header.background[0]}`
imageContainer.src=`${image}`
var i=0;

headerBtnLeft.onclick=()=>{
    console.log(`from left:${i}`)
    if(i==0){
        i=2
        image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
        imageContainer.src=`${image}`
        return
    }
    i=i-1
    image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
    imageContainer.src=`${image}`
}
headerBtnRight.onclick=()=>{
    console.log(`from right:${i}`)
    if(i==imagesFromServer.header.background.length-1){
        i=0
        image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
        imageContainer.src=`${image}`
        console.log(`right if:${i}`)
        return
    }
    i=i+1
    image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
    imageContainer.src=`${image}`
}

setInterval(function updateBackground(){
    console.log(i)
    if(i==imagesFromServer.header.background.length-1){
        i=2;
        image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
        imageContainer.src=`${image}`
        i=0
        return
    }
    image=`data:image/jpg;base64, ${imagesFromServer.header.background[i]}`
    imageContainer.src=`${image}`
    i++
},5000)