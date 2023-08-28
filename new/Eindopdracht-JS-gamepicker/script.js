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
        // console.log('false')
    }
    // Create the cart container div

    let unique = cartStatus ? 'SS'+Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 500) : Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 500);
    
    var cartContainer = document.createElement('div');
    cartContainer.className = 'cartIcon-container';
    cartContainer.id = 'container__'+unique;

    // Create the checkbox container div
    var checkboxContainer = document.createElement('div');
    //let unique = status ? '' : Math.random(1, 100000);
    checkboxContainer.id = 'container__'+unique+'__inner';
    checkboxContainer.classList.add("checkbox__div");
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
            path.setAttribute('d', 'M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z');
        }
    } else {
        document.body.removeAttribute(path)
            // checkboxContainer.removeAttribute(1);
         path.setAttribute('d', 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z');
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
            var closest = this.closest('.cartIcon-container');
            var name = closest.querySelector('.game-name').innerHTML;
            
            console.log("working");
            var productContainer = document.querySelector('#main-container');
            var nodes = productContainer.getElementsByClassName('cartIcon-container');
            for (i = 0; i < nodes.length; i++) {
                
                if (nodes[i].querySelector('.game-name').innerText == name) {
                    var node__id = nodes[i].id;
                    
                    nodes[i].querySelector("#"+node__id+"__inner").classList.remove('checked');
                }
            }
            closest.remove()
            setTimeout(()=> {
                 cartFunction();
            } ,2000);

            
            
            //document.getElementById(position).click();

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
            path.setAttribute('d', 'M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z');
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

        if(checkedArray.length > 0){
            var divToToggleCart = document.getElementById('cart-container'); // gets the div with id 'main-container'
            divToToggleCart.style.display = 'flex';
        } else{
            var divToToggleCart = document.getElementById('cart-container'); // gets the div with id 'main-container'
            divToToggleCart.style.display = 'none';
        }
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

function filterGames(filters) {
    return games.filter(game => {
        return (
            (!filters.title || game.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (!filters.price || game.price <= parseFloat(filters.price)) &&
            (!filters.review || game.rating >= parseInt(filters.review)) &&
            (!filters.genre || game.genre.toLowerCase().includes(filters.genre.toLowerCase()))
        );
    });
}


function updateFilteredGames(filteredGames) {
    var mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    for (var i = 0; i < filteredGames.length; i++) {
        var game = filteredGames[i];
        var title = game.title;
        var price = '$' + game.price;
        var genre = game.genre;
        var rating = game.rating || game.review
        createGames('main-container', title, price,genre,rating, i, 0);
    }
}
// Define filters object outside the event listener
var filters = {
    title: '',
    price: '',
    review: '',
    genre: ''
};
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("filter-button").addEventListener('click', function() {
        console.log('filter-button')
        var titleInput = document.getElementById('titel-input').value;
        var priceInput = document.getElementById('price-input').value;
        var reviewInput = document.getElementById('rating').value;
        var genreInput = document.getElementById('genre').value;
    
         // Update the filters object
         filters.title = titleInput;
         filters.price = priceInput;
         filters.review = reviewInput;
         filters.genre = genreInput;
 
         // Filter and update games
         var filteredGames = filterGames(filters);
         updateFilteredGames(filteredGames);
     });
 
     // Attach game creation function to the main container
     runFunction();
 });
 
 