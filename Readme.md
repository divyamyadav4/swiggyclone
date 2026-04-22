proxy url = "https://cors-anywhere.herokuapp.com/";

Rest card ke header and subheader ka logic 
🧠 Iska logic:
- Pehle header print hota hai
- Fir check hota hai: kya subHeader exist karta hai?
- Agar haan → " " + subHeader add hota hai
- Agar nahi → empty string "" return hoti hai
- Isme undefined kabhi string mein convert nahi hota
