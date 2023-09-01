function Functionality() {

    return (

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(result=>console.log(result))


    )




}


export default Functionality