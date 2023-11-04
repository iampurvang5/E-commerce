const myObjectString2 = localStorage.getItem('objectCart');
const myObject2 = JSON.parse(myObjectString2);
console.log(myObject2.unit_price);
console.log(myObject2.product_name);
var Total = [];
for(let i= 0;i<myObject2.unit_price.length;i++){

    var tr = document.createElement("tr");

    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var inpt0 = document.createElement("input");
    var inpt1 = document.createElement("input");
    var inpt2 = document.createElement("input");
    var inpt3 = document.createElement("input");

    var product = String(myObject2.product_name[i]);
    var price = String(myObject2.unit_price[i]).split(".")[1];
    var quant = Number(myObject2.quantity_value[i]);

    inpt0.type = "text";
    inpt0.value = product;
    inpt1.type="text";
    inpt1.value=price;
    inpt2.type="number";
    inpt2.value=quant;
    inpt2.id="qntty";
    inpt3.type="text";
    inpt3.id="total";
    tr.id="line";

    inpt0.setAttribute("readonly",true);
    inpt1.setAttribute("readonly",true);
    inpt2.setAttribute("readonly",true);
    inpt3.setAttribute("readonly",true);

    inpt0.style.width="100%";
    inpt1.style.width="100%";
    inpt2.style.width="100%";
    inpt3.style.width="100%";

    td0.appendChild(inpt0);
    td1.appendChild(inpt1);
    td2.appendChild(inpt2);
    td3.appendChild(inpt3);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementsByTagName("table")[0].appendChild(tr);
    var quantity = document.getElementById("qntty").value;
    var subtotal = Number(price) * Number(quantity);
    console.log(subtotal);
    inpt3.value= subtotal;
    Total.push(subtotal);
}

var table = document.getElementById("carttable");
var row_count=table.rows.length -1;
console.log(row_count);

var sum = 0;
for(let j=0; j<Total.length; j++) {
 sum = sum + Total[j];     
}
document.getElementById("final_amount").innerHTML=sum;
function clear_data(){
    
    var tr_element = document.getElementById("line");
    var rows = document.querySelectorAll("tr");
    console.log(rows);
    for (var line=0; line<rows.length; line++){
        tr_element.remove();
    }    
    
}


