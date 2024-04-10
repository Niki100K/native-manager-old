const CategoriesJS = () => {

    const products = [
        {
            "name": "Water",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/water500.png`),
            "price": "0.99",
            "ml": "500ml",
            "description": "Purified drinking water"
        },
        {
            "name": "Water",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/water1500.png`),
            "price": "1.99",
            "ml": "1500ml",
            "description": "Purified drinking water"
        },
        {
            "name": "Coca-Cola",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/coca-cola500.png`),
            "price": "2.99",
            "ml": "500ml",
            "description": "Classic Coca-Cola"
        },
        {
            "name": "Coca-Cola",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/coca-cola1500.png`),
            "price": "4.99",
            "ml": "1500ml",
            "description": "Classic Coca-Cola"
        },
        {
            "name": "Fanta",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/fanta500.png`),
            "price": "2.99",
            "ml": "500ml",
            "description": "Orange flavored soda"
        },
        {
            "name": "Fanta",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/fanta1500.png`),
            "price": "4.99",
            "ml": "1500ml",
            "description": "Orange flavored soda"
        },
        {
            "name": "Tonic",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/tonic.png`),
            "price": "4.99",
            "ml": "500ml",
            "description": "Tonic water for mixing"
        },
        {
            "name": "Orange Juice",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/orange-juice.png`),
            "price": "3.99",
            "ml": "500ml",
            "description": "Freshly squeezed orange juice"
        },
        {
            "name": "Apple Juice",
            "category": "Drinks",
            "role": "bar",
            "img": require(`../../assets/products/apple-juice.png`),
            "price": "3.99",
            "ml": "500ml",
            "description": "100% pure apple juice"
        },

        // Alcohol

        {
            "name": "Absolute",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/absolut.png`),
            "price": "19.99",
            "ml": "1500ml",
            "description": "Premium vodka"
        },
        {
            "name": "Ruski",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/ruski.png`),
            "price": "14.99",
            "ml": "1500ml",
            "description": "Russian vodka"
        },
        {
            "name": "Grey Goose",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/gray-goose.png`),
            "price": "34.99",
            "ml": "1500ml",
            "description": "High-quality French vodka"
        },
        {
            "name": "Ariana",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/ariana.png`),
            "price": "3.99",
            "ml": "500ml",
            "description": "Local beer brand"
        },
        {
            "name": "Hainiken",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/hainiken.png`),
            "price": "5.99",
            "ml": "500ml",
            "description": "Imported beer"
        },
        {
            "name": "Pirinsko",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/pirinsko.png`),
            "price": "2.99",
            "ml": "500ml",
            "description": "Bulgarian beer"
        },
        {
            "name": "Corona",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/corona.png`),
            "price": "5.99",
            "ml": "500ml",
            "description": "Mexican beer"
        },
        {
            "name": "Chardonnay",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/Chardonnay.png`),
            "price": "14.99",
            "ml": "1500ml",
            "description": "White wine"
        },
        {
            "name": "Jack Daniels",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/jack-daniels.png`),
            "price": "19.99",
            "ml": "1500ml",
            "description": "Tennessee whiskey"
        },
        {
            "name": "Jameson",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/jameson.png`),
            "price": "14.99",
            "ml": "1500ml",
            "description": "Irish whiskey"
        },
        {
            "name": "Johnnie Black",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/johnnie-walker-black-label-12.png`),
            "price": "34.99",
            "ml": "1500ml",
            "description": "Scotch whisky"
        },
        {
            "name": "Johnnie Blue",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/johnnie-walker-blue-label.png`),
            "price": "59.99",
            "ml": "1500ml",
            "description": "Premium Scotch whisky"
        },
        {
            "name": "Johnnie Red",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/johnnie-walker-red-label.png`),
            "price": "29.99",
            "ml": "1500ml",
            "description": "Blended Scotch whisky"
        },
        {
            "name": "Martini",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/martini.png`),
            "price": "7.99",
            "ml": "250ml",
            "description": "Italian vermouth"
        },
        {
            "name": "Mojito",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/Mojito.png`),
            "price": "4.99",
            "ml": "250ml",
            "description": "Cuban cocktail"
        },
        {
            "name": "Campari Tonic",
            "category": "Alcohol",
            "role": "bar",
            "img": require(`../../assets/products/Campari tonic.png`),
            "price": "7.99",
            "ml": "250ml",
            "description": "Bitter aperitif"
        },

        // Starters

        {
            "name": "Pumpkin Soup",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Pumpkin soup.png`),
            "price": "3.99",
            "ml": "500g",
            "description": "Creamy pumpkin soup"
        },
        {
            "name": "Caprese Salad",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Caprese-Salad.png`),
            "price": "3.99",
            "ml": "500g",
            "description": "Tomato and mozzarella salad"
        },
        {
            "name": "Calamari",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Calamari.png`),
            "price": "4.99",
            "ml": "500g",
            "description": "Fried squid rings"
        },
        {
            "name": "Avocado Tartare",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/avocado-tartare.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Chopped avocado dish"
        },
        {
            "name": "Cheese and Spinach Croquettes",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Cheese and spinach croquettes.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Deep-fried appetizer"
        },
        {
            "name": "Bruschetta with Ricotta",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Bruschetta with ricotta.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Toasted bread with ricotta topping"
        },
        {
            "name": "Grilled Shrimp",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Grilled shrimp.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Succulent grilled shrimp"
        },
        {
            "name": "Caprese Burgers",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Caprese burgers.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Burgers with tomato and mozzarella"
        },
        {
            "name": "Onion Rings",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Onion rings.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Crispy fried onion rings"
        },
        {
            "name": "Steamed Clams",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Steam clams.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Freshly steamed clams"
        },
        {
            "name": "Summer Salad",
            "category": "Starters",
            "role": "chef",
            "img": require(`../../assets/products/Summer salad.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Light and refreshing summer salad"
        },

        // Main dishes

        {
            "name": "Ribeye Steak",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Ribeye Steak.png`),
            "price": "3.99",
            "ml": "500g",
            "description": "Juicy ribeye steak"
        },
        {
            "name": "Spaghetti Bolognese",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Spaghetti Bolognese.png`),
            "price": "3.99",
            "ml": "500g",
            "description": "Classic Italian pasta dish"
        },
        {
            "name": "Salmon with Spinach",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Salmon with Spinach.png`),
            "price": "4.99",
            "ml": "500g",
            "description": "Grilled salmon with sautéed spinach"
        },
        {
            "name": "Veal Marsala",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Veal Marsala.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Veal in Marsala wine sauce"
        },
        {
            "name": "Chicken Curry",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Chicken Curry.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Spicy chicken curry"
        },
        {
            "name": "Roast Duck",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Roast Duck.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Crispy roast duck"
        },
        {
            "name": "Paella with Prawns",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Paella with Prawns.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Spanish paella with prawns"
        },
        {
            "name": "Roast Lamb",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Roast Lamb.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Slow-roasted lamb"
        },
        {
            "name": "Ravioli with Ricotta and Spinach",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Ravioli with Ricotta and Spinach.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Stuffed pasta with ricotta and spinach"
        },
        {
            "name": "Tagliatelle with Goat Cheese",
            "category": "Main dishes",
            "role": "chef",
            "img": require(`../../assets/products/Tagliatelle with Goat Cheese.png`),
            "price": "6.99",
            "ml": "500g",
            "description": "Italian pasta with goat cheese"
        },

        // Pizza

        {
            "name": "Margherita",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Margherita.png`),
            "price": "8.99",
            "ml": "500g",
            "description": "Classic margherita pizza"
        },
        {
            "name": "Pepperoni",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Pepperoni.png`),
            "price": "9.99",
            "ml": "500g",
            "description": "Pizza with spicy pepperoni"
        },
        {
            "name": "Vegetarian",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Vegetarian.png`),
            "price": "9.99",
            "ml": "500g",
            "description": "Pizza loaded with fresh vegetables"
        },
        {
            "name": "Quattro Formaggi",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Quattro Formaggi.png`),
            "price": "10.99",
            "ml": "500g",
            "description": "Four cheese pizza"
        },
        {
            "name": "Seafood Delight",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Seafood Delight.png`),
            "price": "11.99",
            "ml": "500g",
            "description": "Pizza with a variety of seafood"
        },
        {
            "name": "BBQ Chicken",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/BBQ Chicken.png`),
            "price": "10.99",
            "ml": "500g",
            "description": "Barbecue chicken pizza"
        },
        {
            "name": "Hawaiian",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Hawaiian.png`),
            "price": "9.99",
            "ml": "500g",
            "description": "Pizza with ham and pineapple"
        },
        {
            "name": "Pesto Delight",
            "category": "Pizza",
            "role": "chef",
            "img": require(`../../assets/products/Pesto Delight.png`),
            "price": "10.99",
            "ml": "500g",
            "description": "Pizza with pesto sauce"
        },

        // Desserts

        {
            "name": "Tiramisu",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Tiramisu.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Classic Italian dessert"
        },
        {
            "name": "Chocolate Cake",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Chocolate Mousse.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Rich and moist chocolate cake"
        },
        {
            "name": "Cheesecake",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Cheesecake.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Creamy and delicious cheesecake"
        },
        {
            "name": "Fruit Sorbet",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Fruit Sorbet.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Refreshing fruit sorbet"
        },
        {
            "name": "Apple Pie",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Apple Pie.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Homemade apple pie"
        },
        {
            "name": "Strawberry Shortcake",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Strawberry Shortcake.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Delicious strawberry shortcake"
        },
        {
            "name": "Panna Cotta",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Panna Cotta.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Italian dessert with sweetened cream"
        },
        {
            "name": "Lemon Sorbet",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Lemon Sorbet.png`),
            "price": "4.99",
            "ml": "250g",
            "description": "Zesty lemon-flavored sorbet"
        },
        {
            "name": "Molten Chocolate Lava Cake",
            "category": "Desserts",
            "role": "chef",
            "img": require(`../../assets/products/Molten Chocolate Lava Cake.png`),
            "price": "5.99",
            "ml": "250g",
            "description": "Decadent chocolate lava cake"
        },

        // Coffee and tea

        {
            "name": "Espresso",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Espresso.png`),
            "price": "2.99",
            "ml": "Single shot",
            "description": "Strong and concentrated coffee"
        },
        {
            "name": "Cappuccino",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Cappuccino.png`),
            "price": "4.49",
            "ml": "250ml",
            "description": "Coffee with frothy milk and a sprinkle of cocoa"
        },
        {
            "name": "Latte",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Latte.png`),
            "price": "4.99",
            "ml": "300ml",
            "description": "Creamy coffee with a generous amount of steamed milk"
        },
        {
            "name": "Americano",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Americano.png`),
            "price": "3.49",
            "ml": "300ml",
            "description": "Diluted espresso with hot water"
        },
        {
            "name": "Mocha",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Mocha.png`),
            "price": "5.49",
            "ml": "300ml",
            "description": "Chocolate-flavored coffee with steamed milk and whipped cream"
        },
        {
            "name": "Affogato",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Affogato.png`),
            "price": "4.99",
            "ml": "Single shot",
            "description": "Espresso shot poured over a scoop of vanilla ice cream"
        },
        {
            "name": "Chai Latte",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Chai Latte.png`),
            "price": "5.49",
            "ml": "300ml",
            "description": "Spiced tea with steamed milk"
        },
        {
            "name": "Green Tea",
            "category": "Coffee and tea",
            "role": "bar",
            "img": require(`../../assets/products/Green Tea.png`),
            "price": "2.99",
            "ml": "250ml",
            "description": "Refreshing green tea"
        }
    ]

  return {
    products
  }
}

export default CategoriesJS
