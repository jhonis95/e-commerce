const dashboardBtn=document.getElementById('dashboardBtn')
const productBtn=document.getElementById('productBtn')

dashboardBtn.onclick=(evt)=>{
    window.location.href='http://localhost:3000/admin'
}
productBtn.onclick=(evt)=>{
    window.location.href='http://localhost:3000/admin/products'
}