
// document.getElementById("id").addEventListener('click', fun)

//document.getElementById("btn-login").addEventListener('click',function (){})
//step-1 : set event handeler
document.getElementById("btn-login").
    addEventListener('click', function (event){
        // step-2: prevent defautl behavior (prevent reloading browser)
        event.preventDefault()
        console.log('login Button clicked')


        // get the pohne number
        const phoneNumber = document.getElementById("phone-number").value
        console.log(phoneNumber);
        

    })
