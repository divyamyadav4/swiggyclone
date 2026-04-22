#  Swiggy Clone

A food delivery web app clone inspired by Swiggy.

##  Tech Stack
- HTML, CSS, JavaScript
- Parcel Bundler
- CORS Proxy (cors-anywhere)
- Swiggy Live API

##  Features
- Real-time restaurant data from Swiggy API
- Restaurant cards with name, rating, cuisine
- Fast bundling with Parcel

##  How to Run
1. Clone the repo
2. Run `npm install`
3. Run `node server.js` (CORS proxy)
4. Run `npx parcel swiggy_data_clone.html`
5. Open `http://localhost:1234`

##  Developer
Divyam Yadav
proxy url = "https://cors-anywhere.herokuapp.com/";

Rest card ke header and subheader ka logic 
 Iska logic:
- Pehle header print hota hai
- Fir check hota hai: kya subHeader exist karta hai?
- Agar haan → " " + subHeader add hota hai
- Agar nahi → empty string "" return hoti hai
- Isme undefined kabhi string mein convert nahi hota
