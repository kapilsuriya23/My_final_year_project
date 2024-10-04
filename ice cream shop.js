console.log("---------MENU--------");
console.log("1. Chocolate       Rs.35");
console.log("2. Mango           Rs.30");
console.log("3. Vanilla         Rs.25");
console.log("4. Stawberry       Rs.100");
console.log("---------------------");

let totalPrice = 0;
let f = false;

while (!f) {
    let choice = prompt("Enter your choice (1-5) or 'q' to quit: ");

    if (choice === 'q') {
        f = true;
        break;
    }

    choice = Number(choice);
    
    switch (choice) {
        case 1:
            totalPrice += 35;
            console.log("Current total: Rs." + totalPrice);
            break;
        case 2:
            totalPrice += 30;
            console.log("Current total: Rs." + totalPrice);
            break;
        case 3:
            totalPrice += 25;
            console.log("Current total: Rs." + totalPrice);
            break;
        case 4:
            totalPrice += 100;
            console.log("Current total: Rs." + totalPrice);
            break;
        case 5:
            totalPrice += 80;
            console.log("Current total: Rs." + totalPrice);
            break;
        default:
            console.log("Invalid choice.");
            break;
    }
}

console.log("Total Price of Ordered ice cream: Rs." + totalPrice);
