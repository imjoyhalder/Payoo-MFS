

document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault()
        
        const cashOutMoney = document.getElementById('cash-out-money').value
        const pinNumber = document.getElementById('cash-out-pin-number').value

        if(pinNumber === '1234'){
            const currentBalance = document.getElementById('acc-balance').innerText
            let cashoutm = parseFloat(cashOutMoney)
            let cBalance = parseFloat(currentBalance)

            if(cashoutm <= cBalance){
                cBalance -= cashoutm
                
                // change balance in ui
                document.getElementById('acc-balance').innerText = cBalance

            }
            else{
                alert("Sorry not enough money")
            }
        }
        else{
            alert('Wrong pin')
        }
        
    })