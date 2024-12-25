<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        *{
           text-decoration: none; 
        }
        .navbar{
            background: cornflowerblue; font-family: calibri; padding-right: 15px;padding-left: 15px;
        }
        .navdiv{
            display:flex; align-items: center; justify-content: space-between;
        }
        .logo a{
            font-size: 35px; font-weight: 600; color:white
        }
        li{
            list-style: none;display: inline-block;
        }
        li a{
            color:white; font-size: 18px; font-weight: bold; margin-right: 25px;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navdiv">
            <div class="logo"><a href="#">LuLuShop</a> </div>
            <ui>
                <li><a href="#">About</a> </li>
                <li><a href="#">Help Center</a> </li>
                <li><a href="#">Support</a> </li>
            </ui>
        </div>
    </nav>


    <link rel="shortcut icon" href="/assets/favicon.icons"> 
    <link rel="stylesheet" href="./src/nav.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <nav class="nav"> </nav>
    <a href="#" class="nav__link">
        <i class="material-icons nav__icon">home</i>
        <span class="nav__text">Home</span>
     </a>
     <a href="#" class="nav__link--active">
        <i class="material-icons nav__icon">search</i>
        <span class="nav__text">Search</span>
     </a>
     <a href="#" class="nav__link">
        <i class="material-icons nav__icon">favorite_border</i>
        <span class="nav__text">Favorites</span>
     </a>
     <a href="#" class="nav__link">
        <i class="material-icons nav__icon">shopping_bag</i>
        <span class="nav__text">Bag</span>
     </a>
     <a href="#" class="nav__link">
        <i class="material-icons nav__icon">person</i>
        <span class="nav__text">Account</span>
     </a>

     body {
    margin: 0 0 55px 0;
}

.nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    overflow-x: auto;
}

.nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.1s ease-in-out;
}

.nav__link:hover {
    background-color: #eeeeee;
}

.nav__link--active {
    color: #009578;
}

.nav__icon {
    font-size: 18px;
}

</body>
</html>
