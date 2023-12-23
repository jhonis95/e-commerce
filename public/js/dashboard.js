const dashboardBtn=document.getElementById('dashboardBtn')
const productBtn=document.getElementById('productBtn')
const ordersBtn=document.getElementById('ordersBtn')
const statisticBtn=document.getElementById('statisticBtn')
const financeBtn=document.getElementById('financeBtn')
// const addProductModal=document.getElementById('addProductModal')

const addBtn=document.getElementById('addbtn')
const mess=document.getElementById('mess')

const mainContainer=document.getElementById('mainContainer')

dashboardBtn.onclick=(evt)=>{
    console.log('dashboard')
    window.location.href='http://localhost:3000/admin'
}
productBtn.onclick=(evt)=>{
    window.location.href='http://localhost:3000/admin/products'
}
ordersBtn.onclick=()=>{
    window.location.href='http://localhost:3000/admin/orders'
}
statisticBtn.onclick=()=>{
    window.location.href='http://localhost:3000/admin/statistic'
}
financeBtn.onclick=()=>{
    window.location.href='http://localhost:3000/admin/finance'
}
//switch case to add the focus style
switch(main){
    case 'home':
        console.log('add focus stile to the button')
        break;
    case 'products':
        console.log('add focus stile to the button')
        break;
    default:
        break;
}

//function to load the image of the uploaded photo
// addProductModal.onload=(evt)=>{
//     fetch('',{})
// }