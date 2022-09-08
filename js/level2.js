document.getElementById('increase').addEventListener('click', function () {
    const countField = document.getElementById('count');
    const countValue = countField.innerText
    // console.log(countValue);
    let value = parseFloat(countValue);
    // console.log(value);
    value++;
    // console.log(value);
    countField.innerText = value;
    localStorage.setItem("Count", value);

})



const parmanent = () => {
      const countField = document.getElementById('count');
    const data = localStorage.getItem('Count')
    countField.innerText = data
    

}


parmanent();