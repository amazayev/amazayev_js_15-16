

$('.button').on('click', function() {

  $.getJSON("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
    function(data){
      console.log(data);
      $('div').append('<h3>Курс валют на сегодня:</h3>');
      $.each(data, function(i,item) {
         console.log(item.ccy, item.base_ccy, item.buy, item.sale);
           var ul = document.createElement('ul');
           var li = document.createElement('li');
           $('div').append(ul);
           $(ul).append(li);
           $(li).append(function(i){
               return 'Курс ' + item.ccy + ': ' + '   ' + 'ПОКУПКА: ' + item.buy + ' ' + 'ПРОДАЖА: ' + item.sale;
             });
       });
    });
});

$('body').on('click', function(){
  $('ul').remove();
  $('h3').remove();
});
///////////////////////////////////////////////////////////////////////////////////

$('.button1').on('click', function() {
   var txt = $("#search").val();
   console.log(txt);
  $.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&="+txt+"&image_type=photo",
  function(data){
     var gallery = document.createElement('figure');
     $('body').append(gallery);
     console.log(data);
     console.log(gallery);
     $.each(data.hits, function(i,item){
       var galleryUnit = document.createElement('a');
       $(gallery).append(galleryUnit);
       $("<img>").attr("src", item.previewURL).appendTo(galleryUnit);
     });
      });
  });

  $('body').on('click', function(){
    $('figure').remove();
  });
