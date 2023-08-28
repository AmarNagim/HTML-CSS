var games = [{
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {

        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
];


var checkedArray = [

];




window.onload = function() {



    var divToToggleCart = document.getElementById('cart-container'); // gets the div with id 'main-container'

    divToToggleCart.dataset.prevDisplay = divToToggleCart.style.display;
    divToToggleCart.style.display = 'none';
    let isHidden = false; // variable to hold the state

    document.getElementById("cart-button").addEventListener('click', function() {

        var divToToggle = document.getElementById('main-container');

        if (!isHidden) {
            // Hide the div and remember its original display value
            divToToggle.dataset.prevDisplay = divToToggle.style.display;
            divToToggle.style.display = 'none';

            divToToggleCart.style.display = divToToggleCart.dataset.prevDisplay;

        } else {
            // Restore the original display value
            divToToggle.style.display = divToToggle.dataset.prevDisplay;

            divToToggleCart.dataset.prevDisplay = divToToggleCart.style.display;
            divToToggleCart.style.display = 'none';
        }

        isHidden = !isHidden;
    });

    
}



function removeElement(checkedArray, elementToRemove) {
    return checkedArray.filter(element => element !== elementToRemove);
}

var checkboxArray = [

];

function createGames(container, title, price, position, cartStatus, status = true) {
    if (cartStatus == 1) {
        console.log('true')
    } else if (cartStatus == 0) {
        console.log('false')
    }
    // Create the cart container div
    var cartContainer = document.createElement('div');
    cartContainer.className = 'cartIcon-container';

    // Create the checkbox container div
    var checkboxContainer = document.createElement('div');
    let unique = status ? '' : Math.random(1, 100000);
    checkboxContainer.id = 1;
    if (!status) {
        checkboxContainer.classList.add("checked");
    }
    // Create the SVG element

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', 'bi bi-cart4');
    svg.setAttribute('viewBox', '0 0 16 16');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // Create the path element

    if (cartStatus == 0) {

        if (status) {
            path.setAttribute('d', 'M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z');
            // Append the path element to the SVG element
        } else {
            path.setAttribute('d', 'M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z');
        }
    } else {
        document.body.removeAttribute(path)
            // checkboxContainer.removeAttribute(1);

        // document.body.removeChild(checkboxContainer)
    }

    svg.appendChild(path);
    checkboxContainer.appendChild(svg);
    // Append the SVG element to the checkbox container
    // Create the game container div
    var gameContainer = document.createElement('div');
    gameContainer.id = 'game-container';

    // Create the game name heading
    var gameName = document.createElement('h1');
    gameName.classList.add('game-name');
    gameName.textContent = title;

    // Create the price text heading
    var priceText = document.createElement('h1');
    priceText.classList.add('price-text');
    priceText.textContent = price;

    // Append the game name and price text to the game container
    gameContainer.appendChild(gameName);
    gameContainer.appendChild(priceText);

    // Append the checkbox container and game container to the cart container
    cartContainer.appendChild(checkboxContainer);
    cartContainer.appendChild(gameContainer);
    // Get the main container
    var mainContainer = document.getElementById(container);
    // Append the cart container to the main container
    if (mainContainer) {
        mainContainer.appendChild(cartContainer);
    }
    // Add event listener to checkbox container
    svg.addEventListener('click', function(e) {
        if (!status) {
            this.closest('.cartIcon-container').remove();
            document.getElementById(position).click();

        }
    })
    checkboxContainer.addEventListener('click', function(e) {
        // Toggle 'checked' class on the checkbox container
        checkboxContainer.classList.toggle('checked');
        // Toggle the SVG icon
        if (checkboxContainer.classList.contains('checked')) {
            // Change the SVG to a checked icon
            checkedArray.push(position);
            cartFunction(false);
            path.setAttribute('d', 'M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z');
        } else {
            checkedArray = removeElement(checkedArray, position);
            // Change the SVG back to an unchecked icon
            path.setAttribute('d', 'M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z');
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    createGames();
})







function cartFunction(status = true) {
    var fullprice = 0

    // Clear the cart first
    let cartContainer = document.getElementById('cart-container');
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
    var cartH1 = document.createElement("h1");
    cartH1.innerHTML = "Winkelmandje"
    cartContainer.appendChild(cartH1)
    if (status) {
        // Then add the selected games
        for (var i = 0; i < checkedArray.length; i++) {
            var game = games[checkedArray[i]];
            var title = game.title;
            var price = '$' + game.price;
            fullprice = game.price + fullprice
            createGames('cart-container', title, price, i, 1, false);
        }
        var fullpriceFloat = Number(fullprice)
        var fullpriceH1 = document.createElement("h1");
        fullpriceH1.innerHTML = "Totaalprijs $" + fullpriceFloat
        cartContainer.appendChild(fullpriceH1)
    }
}

function removeFromCart(id) {

}


function runFunction() {

    for (var i = 0; i < games.length; i++) {
        var game = games[i];
        var title = game.title;
        var price = '$' + game.price;
        createGames('main-container', title, price, i, 0);

    };
    

}

function filterFunction(filterArray) {
    document.getElementById('main-container').innerHTML = "";

    console.log(filterArray)
    var newGames = [] 

    let hasGenreKey = games.some(game => game.hasOwnProperty('genre'));

    console.log(hasGenreKey); 

    if(filterArray)
    var newGames = games.filter(function(game) {
        return game.rating >= 4;
    });

    console.log(newGames)
    


    // createGames('main-container', 'bla', 8, 3, 0)

}

    



window.onload = function() {
    var divToToggleCart = document.getElementById('cart-container'); // gets the div with id 'main-container'
    divToToggleCart.style.display = 'none';
    document.getElementById("filter-button").addEventListener('click', function() {

        console.log('filter buton')

        var titelInput = document.getElementById('titel-input').value;
        
        var priceInput = document.getElementById('price-input').value;

        var reviewInput = document.getElementById('reviews').value;

        var genreInput = document.getElementById('genre').value;

        var filterInputArray = [{'title':titelInput}, {'price':priceInput}, {'review':reviewInput}, {'genre':genreInput}];
        var filterInputFixedArray = [];

        console.log(titelInput, priceInput, reviewInput, genreInput)

        filterInputArray.forEach(element => {
            if (element != "") {
                filterInputFixedArray.push(element)
                console.log(filterInputFixedArray)  
            }
        });

        
        filterFunction(filterInputFixedArray)

    })
}
