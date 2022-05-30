// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketData = JSON.parse(localStorage.getItem("coffee"));
console.log(bucketData);

let container = document.getElementById("bucket");

function ShowBucket(data){
    data.forEach(function(el){
        let div1 = document.createElement("div");
        div1.setAttribute("id","div1");

        let type = document.createElement("h3");
        type.innerText = el.title;
        
        let image = document.createElement("img");
        image.src = el.image;

        let price = document.createElement("p");
        price.innerText = "Rs. " +el.price;

        let rembtn = document.createElement("button");
        rembtn.innerText = "Remove";
        rembtn.setAttribute("id","remove_coffee");
        rembtn.addEventListener("click",function(){
            removeCoffee(el);
        });

        div1.append(image,type,price,rembtn);
        container.append(div1)
    })
};
ShowBucket(bucketData);

function removeCoffee(el,index){
    bucketData.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(bucketData));
    window.location.reload();
}

let total = bucketData.reduce(function(sum,el,index,arr){
    return sum + Number(el.price) ;
},0);
console.log(total);

document.getElementById("total_amount").innerText = total;