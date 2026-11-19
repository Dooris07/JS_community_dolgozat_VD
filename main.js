class Patron {
    constructor(subscriber, premium, paid_total) {
        this.name = subscriber;
        this.premium = premium;
        this.paid = paid_total;
    }
}

async function init() {
    const response = await fetch("/patrons.json");
    const adatok = await response.json();

    /**@type Patron[] */
    const patrons = adatok.map(i => new Patron(i.subscriber, i.premium, i.paid_total))
    console.log(patrons)

    for (let i = 0; i < patrons.length; i++) {
        const element = patrons[i];
        tableCreator(element);
    }

}
init()

/**@param {Patron} patrons*/
function tableCreator(patrons){
    const row = document.createElement("tr")
    const name = document.createElement("td")
    const premium = document.createElement("td")
    const paid = document.createElement("td")
  
    name.textContent = patrons.name;

    if (patrons.premium = "true") 
    {
        premium.textContent = "✅"
    }
    else
    {
        premium.textContent =  "❌";
    }

    paid.textContent = patrons.paid;

      if (patrons.paid > 800) {
        premium.classList.add('table-warning');
    }
    premium.classList.add("text-center")
    paid.classList.add("text-center")
    name.classList.add("text-center")
    

    
    function Valtoztatas() {
        document.getElementById("message").textContent = "Sikeres változtatás"
        setTimeout(() =>{
            document.getElementById("message").textContent = ""
        },5000)
        if (premium.textContent == "✅") {
            premium.textContent = "❌"
            patrons.premium = "false"
        }
        else{
            premium.textContent = "✅"
            patrons.premium = "true"
        }
        
    }


    row.appendChild(name);
    row.appendChild(premium);
    row.appendChild(paid);
    document.getElementById("body").appendChild(row);
    premium.onclick = Valtoztatas;

}




