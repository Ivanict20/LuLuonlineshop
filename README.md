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
</body>
</html>
