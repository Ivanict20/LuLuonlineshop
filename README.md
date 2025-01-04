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

.navdiv{
  margin: auto;
}
.icons {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:row;
    min-height: 12vh;
  }
  
  .icons {
    display: flex;
    justify-content:space-around;
    align-items:center;
    position: fixed; /* Keeps it fixed at the bottom */
    bottom: 0; /* Anchors to the bottom */
    left: 0;
    width: 100%; /* Spans full width of the screen */
    background-color: #f8f9fa; /* Add a background color */
    padding: 10px 0;
    border-top: 1px solid #ccc; /* Optional, for design */
  }
  
  .icons
   a {
    text-decoration: none;
    color:rgb(21, 162, 210) ; /* Adjust text color */
    font-size: 20px; /* Adjust font size */
    font-weight: bold;
  }
  .search{  
    width: max-content;
    display: flex;
    align-items: center;
  }
  .search{
    margin: auto;
  }
  
