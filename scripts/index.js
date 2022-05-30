// Add the coffee to local storage with key "coffee"
// https://masai-mock-api.herokuapp.com/coffee/menu

const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

async function Getdata(){
    try{
        let res = await fetch(url);
        let product = await res.json();
        console.log(product.menu.data);
        appendData(product.menu.data);
    }
    catch(err){
        console.log(err);
    }
    
}
Getdata();

let container = document.getElementById("menu");
function appendData(data){
    data.forEach(function(el){
        let box = document.createElement("div");
        box.setAttribute("id","coffee_div");

        let type = document.createElement("h3");
        type.innerText = el.title;

        let image = document.createElement("img");
        image.src = el.image;
        
        let price = document.createElement("p");
        price.innerText = "Rs. " + el.price;

        let btn = document.createElement("button");
        btn.innerText ="Add to Bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click",function(){
            setBucket(el);
        });
        box.append(image,type,price,btn);
        container.append(box);
    });
}

let bucketData =  JSON.parse(localStorage.getItem("coffee")) ||[];

function setBucket(el){
    bucketData.push(el);
    localStorage.setItem("coffee",JSON.stringify(bucketData));
    let x = JSON.parse(localStorage.getItem("coffee"));

    document.getElementById("coffee_count").innerText = x.length;
}