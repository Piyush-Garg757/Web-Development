/*The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest. */
// it returns a promise which is fulfilled once the response is available

//******************* */ jab hum fetch se koi response mange aur vo error 404 return kare to promise reject nhi higa resolve hoga matlab basically vo rject mein nahi jayega resolve mein jayega kyuki reject mein tab jata jab kuch bhi na ata  - e ek important interview question hai***********


// image explanation
/* fetch 2 part mein kaam kartahai   ek part jata hai uska browsr ya node ki api ko handle karne mein   aur dusra memory mein space variables ke liye reserve karne ke liye

ab is 2nd vale mein 2 arrays hote hain onfulfiled jo ki hai resolve ke liye aur on rejection jo ki hai rejection ke liye
ye arrays hote hin aur inmein hum directly values push nahi kar sakte hain ye hmare liiye directly accesible nahi hoete hain*/

/* ab firdt part jo ki browser ya node ki api requests handle kar raha tha usmein network request generate hoti hai jo ki fulfil hoti hi ya nahi hoti 
agar jake kuvh bhi response aya to vo  jata hai onfulfiled mein aur request gayi nahi ya fir kuvh response nah aya to onrekection mein jayega 
isiliye upar kaha thab ki error 404 bhi retyrn kiya to resolve mein jata hai kyuki vo bhi as a response hi count hota hai

ab ye jo space hoti hai vo initially empty hoti hai 
to jab kaam ho gaya to arrays ke andar function ate hain jo ki resposnible hote hain uss space ko fill karne ke liye
\
ab jaise hi data mein memory aa gayi to vo uski responsibility hai ki vo jake response ko global memory mein de taki use access kiya ja sakke*/