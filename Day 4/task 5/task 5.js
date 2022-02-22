function request(){
    fatch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json()

    })
    .then((response)=>{
        console.log(response)
})
}
