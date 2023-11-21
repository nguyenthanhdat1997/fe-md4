function getApartments(apartment) {
    return ``

}

function showApartment() {
    console.log("hello");
    $.ajax({
        type:"GET",
        url:"http://localhost:8080/api/apartments",
        success: function (data){
            let content = '';
            for (let i = 0; i<data.length;i++){
                content += getApartments(data[i]);
            }
            document.getElementById('showApartment').innerHTML=content;
        }
    })
}