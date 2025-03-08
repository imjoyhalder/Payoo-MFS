
// document.getElementById("id").addEventListener('click', fun)

//document.getElementById("btn-login").addEventListener('click',function (){})
//step-1 : set event handeler

// document.getElementById("btn-login").
//     addEventListener('click', function (event){
//         // step-2: prevent defautl behavior (prevent reloading browser)
//         event.preventDefault()
//         console.log('login Button clicked')


//         // get the pohne number
//         const phoneNumber = document.getElementById("phone-number").value
//         const pinNumber = document.getElementById("pin-number").value
//         //console.log(phoneNumber, pinNumber);
   
        
//         if(phoneNumber === '017' && pinNumber === "1234"){
//             console.log("You are logged in")
//         }
//         else{
//             alert("Wrong Phone Number or Pin")
//         }
//     })

document.getElementById("btn-login")
    .addEventListener('click', function(event){
        event.preventDefault()
    
        const phoneNumber = document.getElementById("phone-number").value
        const pinNumber = document.getElementById("pin-number").value
        console.log(phoneNumber, pinNumber);
   
        if(phoneNumber === '017' && pinNumber === "1234"){
            console.log("You are logged in")
            window.location.href = '/home.html'
        }
        else{
            alert("Wrong Phone Number or Pin")
        }
    })