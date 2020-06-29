// Variables Used In Expense Tracker App
var totalBalance;
var income;
var expense;
var descriptions = [];
var description = ""
var values = [];
var value = "";

// Retrieve Description of Input
function inputDescription(val) {
    description = val;
}
// Retrieve Values of Input
function inputValue(val) {
    value = val;
}

//Button Clicked
function submit() {
    lists(description, value);
    descriptions.push(description);
    values.push(value);
    Balance(values);
    // Resetting data in input Box
    document.querySelector(".input-field-1").value = "";
    document.querySelector(".input-field-2").value = "";


}

// Calculate Total Balance
function Balance(values) {
    // console
    // value > 0 ? income +=value : expense += value;
    // totalBalance += value;  
    // display();
    income = 0;
    expense = 0;
    totalBalance = 0;
    values.forEach(
        (x) => {
            Number(x) > 0 ? income += Number(x) : expense += Number(x);
            totalBalance += Number(x);
        }
    )

    display();
}

// display Balance
function display() {
    document.querySelector(".totalBalance").textContent = ("$" + totalBalance);
    document.querySelector(".income").textContent = ("+$" + income.toString());
    document.querySelector(".expense").textContent = ("-$" + expense.toString());
}

// list Items
function lists(a, b) {
    var node = document.createElement("li"); 
    var btn = document.createElement("button");
    btn.className = "remove-item";
    btn.addEventListener('click', function() {
        values.pop();
        Balance(values);
        document.querySelector(".myList").removeChild(node);     
    })
    var img = document.createElement("img");
    img.src = "dustbin.png";
    img.className = "myimg";
    btn.appendChild(img);  // Create a <li> node
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    node.appendChild(span1);
    node.appendChild(span2);
    node.appendChild(span3);
    var textnode1 = document.createTextNode(a);
    var textnode2 = document.createTextNode(("$" + b));         // Create a text node
    span1.appendChild(textnode1);
    span2.appendChild(textnode2);
    span3.appendChild(btn);
    Number(b) > 0  ? node.className = "positive-hover":node.className = "negative-hover";                              // Append the text to <li>
    document.querySelector(".myList").appendChild(node);     // Append <li> to <ul> with id="myList"

}

