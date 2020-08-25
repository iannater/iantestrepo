


function addData(data) {
   
    var mTable = $("#medTable")
mTable.append(`<tr>
<td>${new Date()}</td>
<td>${data}</td>
<td>8</td>`

)

}

$(".button").on("click", function(){
    console.log(this)
    var data = $(this).text()
    console.log(data)
    addData(data)
})

