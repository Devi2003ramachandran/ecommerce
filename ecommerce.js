const ecommerce = () => {  
let stockitem = document.getElementById("Stockitem").value;
let qty=document.getElementById("qty").value;
let rate=document.getElementById("rate").value;
let amount=document.getElementById("amount").value;
let file = document.getElementById("imgid").files[0];
    let a = new FileReader();
    a.readAsDataURL(file)
    a.onload = function () {
        document.getElementById("my-img").src = a.result;
    };

    document.getElementById("Stockitem").value="";
    document.getElementById("qty").value="";
    document.getElementById("rate").value="";
    document.getElementById("amount").value="";
    document.getElementById("imgid").value="";





document.getElementById("tableid").innerHTML+=`<tr><td>${stockitem}</td><td>${qty}</td><td><img id="my-img" src="${a.result}" width=100px" height="100px"/></td><td>${rate}</td><td>${amount}</td></tr>`;
}
document.getElementById("btn").addEventListener("click",ecommerce);
