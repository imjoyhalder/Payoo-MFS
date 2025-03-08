// add money

document.getElementById("btn-add-money")
    .addEventListener('click',function(event){
        // prevent page reload after form submit
        event.preventDefault()
        
        const addMoney = document.getElementById("input-add-money").value
        const pinNumber = document.getElementById("pin-number").value

        if(pinNumber==='1234'){
            
            // get current balance
            const balance = document.getElementById("acc-balance").innerText
            console.log(balance);
            
            // add money with current balance 
            const newBalance = parseFloat(balance) + parseFloat(addMoney)
            
            // update the balance into ui
            document.getElementById("acc-balance").innerText = newBalance
        }
        else{
            alert("Failed added money")
        }
    })