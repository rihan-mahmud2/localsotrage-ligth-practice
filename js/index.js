document.getElementById('add-info').addEventListener('click', function () {
    localStorage.setItem('age', 25);


})


document.getElementById('remove-info').addEventListener('click', function () {

localStorage.removeItem('age')

})