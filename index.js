const total = [];
const subtotal = [];
const tax = 1.07;
const dinnerMarkup = 1.20;


$('#order').hide();
$('#check').hide();

const breakfastMenu = {
    1: {
        name: "Ham & Eggs",
        description: "Eggs any style with homemade hash browns",
        price: 7.00
    },
    2: {
        name: "Sausage or Bacon",
        "description": "With two eggs any style and homemade hash browns",
        "price": 4.00
    },
    3: {
        name: "Bacon or Sausage or Ham",
        description: "With one egg any style and homemade hash browns",
        price: 6.00
    },
    4: {
        name: "One Egg",
        description: "Any style with homemade hash browns",
        price: 3.50
    },
    5: {
        name: "Blueberry Pancakes",
        description: "One or two blueberry pancakes",
        price: 4.00
    },
    6: {
        name: "Belgian Waffle",
        description: "The homemade one with the deep pockets. Whipped cream and strawberries available",
        price: 7.50
    },
};

const breakfastSides = {
    "1": {
        name: "Bacon Slices (2 or 4)",
        price: 2.00
    },
    "2": {
        name: "Slice of Ham",
        price: 2.00
    },
    "3": {
        name: "English Muffin",
        price: 1.00
    },
    "4": {
        name: "Hash Browns",
        price: 1.50
    },
    "5": {
        name: "Cinnamon Roll",
        price: 2.00
    },
    "6": {
        name: "Toast (wheat, white, or rye)",
        price: 0.50
    },
};

const mainMenu = {
    "1": {
        name: "Grilled Ham & Cheese",
        description: "Served on Texas bread",
        price: 9.00
    },
    "2": {
        name: "French Dip",
        description: "Thinly sliced roast beef on a French roll with au jus",
        price: 10.00
    },
    "3": {
        name: "Bottega's 1/2 Pounder",
        description: "1/2 lb. Black Angus burger grilled to perfection. Mushrooms & Swiss cheese available",
        price: 10.00
    },
    "4": {
        name: "Hot Beef",
        description: "Sliced beef on bread with mashed potatoes and gravy all over",
        price: 9.50
    },
    "5": {
        name: "Super Burger",
        description: "8 oz. Topped with two slices of American cheese and two strips of bacon",
        price: 12.00
    },
    "6": {
        name: "Fish Sandwich",
        description: "4 oz. Haddock. Deep fried",
        price: 12.00
    },
};

const mainSides = {
    "1": {
        name: "Potato Salad",
        price: 2.00
    },
    "2": {
        name: "Cole Slaw",
        price: 2.00
    },
    "3": {
        name: "Apple Sauce",
        price: 1.00
    },
    "4": {
        name: "Cottage Cheese",
        price: 1.50
    },
    "5": {
        name: "Vegetable of the Day",
        price: 2.00
    },
    "6": {
        name: "Baked Potato",
        price: 1.50
    },
};

const serverComment = () => {
    const commentList = [
        'Great choice!',
        'Excellent choice!',
        'That\'s one of my favorites!',
        'I haven\'t tried it, but it is a popular item!'
    ];

    const randomComment = () => {
        return Math.floor(Math.random() * commentList.length);
    };

    document.getElementById('server-comment').innerHTML = '<br>' + commentList[randomComment()];

}

const guestCheck = () => {
    document.getElementById('guest-check').innerHTML = '<h3>Your Check</h3>';
    document.getElementById('guest-check').innerHTML += '<div>Subtotal : $' + (subtotal.reduce(function (total, current) { return total + current })).toFixed(2) + '</div><br>';
    document.getElementById('guest-check').innerHTML += '<div>Tax : ' + ((tax - 1) * 100).toFixed() + '%</div><br>';
    document.getElementById('guest-check').innerHTML += '<div>Total Due : $' + (total.reduce(function (total, current) { return total + current })).toFixed(2) + '</div><br>';
}

function breakfastClick() {
    $('#order').show();

    document.getElementById('dinnerBtn').disabled = false;
    document.getElementById("lunchBtn").disabled = false;
    $('#dinner-div').hide();
    $('#lunch-div').hide();
    $('#breakfast-div').show();

    $('#breakfast-div').html('');
    for (var key in breakfastMenu) {
        document.getElementById('breakfast-div').innerHTML += `<br><strong>${breakfastMenu[key].name}</strong>&nbsp;&nbsp;&nbsp;&nbsp;$${breakfastMenu[key].price.toFixed(2)}`;
        document.getElementById('breakfast-div').innerHTML += `<br>${breakfastMenu[key].description}<br>`;
    }

    document.getElementById('breakfast-div').innerHTML += `<br><strong>SIDES</strong>`;
    for (var key in breakfastSides) {
        document.getElementById('breakfast-div').innerHTML += `<br>${breakfastSides[key].name} &nbsp;&nbsp;&nbsp;&nbsp;$${breakfastSides[key].price.toFixed(2)}`;
    }
    document.getElementById('brekfastBtn').disabled = true;
}
function lunchClick() {
    $('#order').show();

    document.getElementById('brekfastBtn').disabled = false;
    document.getElementById('dinnerBtn').disabled = false;
    $('#breakfast-div').hide();
    $('#dinner-div').hide();
    $('#lunch-div').show();

    $('#lunch-div').html('');

    for (var key in mainMenu) {
        document.getElementById('lunch-div').innerHTML += `<br><strong>${mainMenu[key].name}</strong>&nbsp;&nbsp;&nbsp;&nbsp;$${mainMenu[key].price.toFixed(2)}`;
        document.getElementById('lunch-div').innerHTML += `<br>${mainMenu[key].description}<br>`;
    }

    document.getElementById('lunch-div').innerHTML += `<br><strong>SIDES</strong>`;
    for (var key in mainSides) {
        document.getElementById('lunch-div').innerHTML += `<br>${mainSides[key].name} &nbsp;&nbsp;&nbsp;&nbsp;$${mainSides[key].price.toFixed(2)}`;
    }

    document.getElementById("lunchBtn").disabled = true;
}

function dinnerClick() {
    $('#order').show();

    document.getElementById('brekfastBtn').disabled = false;
    document.getElementById('lunchBtn').disabled = false;
    $('#breakfast-div').hide();
    $('#lunch-div').hide();
    $('#dinner-div').show();

    $('#dinner-div').html('');
    for (var key in mainMenu) {
        document.getElementById('dinner-div').innerHTML += `<br><strong>${mainMenu[key].name}</strong>&nbsp;&nbsp;&nbsp;&nbsp;$${(mainMenu[key].price + dinnerMarkup).toFixed(2)}`;
        document.getElementById('dinner-div').innerHTML += `<br>${mainMenu[key].description}<br>`;
    }

    document.getElementById('dinner-div').innerHTML += `<br><strong>SIDES</strong>`;
    for (var key in mainSides) {
        document.getElementById('dinner-div').innerHTML += `<br>${mainSides[key].name} &nbsp;&nbsp;&nbsp;&nbsp;$${mainSides[key].price.toFixed(2)}`;
    }

    document.getElementById("dinnerBtn").disabled = true;
}

function orderMeal() {
    var userMeal = document.getElementById('main').value;
    var userside = document.getElementById('side').value;

    for (var key in breakfastMenu) {
        if (userMeal.toLowerCase() == breakfastMenu[key].name.toLowerCase()) {
            serverComment();
            subtotal.push(breakfastMenu[key].price);
            total.push((breakfastMenu[key].price) * tax);
            console.log(total);
            // guestCheck();
        }
    };

    console.log(userMeal);
    console.log(userside);


}