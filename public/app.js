
function setCardList(list) {
  let $tbody = $('#card-list-body');
  for(let i = 0; i<list.length; i++) {
    let item = list[i];
    let $row = $tbody.append($('<tr/>'))
    $row.append($('<td/>').text(i + 1000));
    $row.append($('<td/>').text(item.name));
    $row.append($('<td/>').text(item.card_number));
  }
}

async function setUpApp() {
  let card_list = (await axios.get('/get_card_list')).data;
  setCardList(card_list)
  debugger
}
setUpApp()

$("form").submit(function(){
  var formData = new FormData();
  formData.append('file', $('#file')[0].files[0]);
  
  $.ajax({
         url : '/uploadjavatpoint',
         type : 'POST',
         data : formData,
         processData: false,  // tell jQuery not to process the data
         contentType: false,  // tell jQuery not to set contentType
         success : function(data) {
             console.log(data);
             alert(data);
         }
  });

  return false;
});
