
# Poke Bowls Project

## Project Name: Seafloor

## Student Name: Niloufar Zamindar

## Installations

```bash
  cd client
  npm install
  cd server
  npm install
```
## Run App

After installation run both client and server with npm

```bash
  cd client
  npm start
  cd server
  npm start
```
## Server-Side

### HTTP APIs
* `POST` | `/api/getBowls` Returns bowls list
* `POST` | `/api/getBowlById` Returns bowl By Id
* `GET`  | `/api/resetBowlsStock` Reset bowls stock
* `POST` | `/api/signup` Signup user
* `POST` | `/api/login` Login user and returns accessToken
* `POST` | `/api/addOrder` Add new Order
* `POST` | `/api/fetchOrders` Returns Orders List By userId

### Database tables

* `Bowls` The list of bowls are placed in this table.
* `Orders` The list of orders are placed in this table.
* `Users` The list of users are placed in this table.

## Client-Side

### React Routes

* `/` MainLayout and navigate to product page
* `/login` Login page
* `/signout` Signout User
* `/product` Product page that showed bowls list
* `/product/:id/info` ProductInfo page that showed product details and configuring the poke bowl and add to cart.
* `/cart` Cart page that showed list of added product.
* `/orders` Orders page that showed user orders list.

### Main React components

* `<Header/>`: Site Header
* `<Navigation/>`: Site Navigation
* `<MainLayout/>`: Main Layout
* `<Login/>`: Login page
* `<Signout/>`: Signout page
* `<Product/>`: Product page
* `<ProductInfo/>`: ProductInfo page
* `<Cart/>`: Cart page
* `<Orders/>`: Orders page

## Overall

## Screenshot

![App Screenshot](https://i.ibb.co/LvMNyQr/product-Info.png)


## Authentication info

| email | password | fullname |
|-------|----------|------|
| sajad@gmail.com | 123456 | sajad |
| sara@gmail.com | 123456 | sara |
| fatemeh@gmail.com | 123456 | fatemeh |
