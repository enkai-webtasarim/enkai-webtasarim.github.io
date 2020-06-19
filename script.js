function validate(form){
    var adi = form.adi.value;
    var soyadi = form.soyadi.value;
    var hata = [];
  
    if (!uzunlukkontrol(adi,3,15)) {
        hata.push("Adınızı Girin En az 3 en fazla 15 karakter\n");
    }
  
    if (!uzunlukkontrol(soyadi,3,15)) {
        hata.push("Soyadınızı Girin En az 3 En fazla 15 karakter");
    }
 
    if (hata.length > 0) {
        hatalarigoster(hata);
        return false;
    }
  
    return true;
}

  
function uzunlukkontrol(text, min, max){
    min = min || 1;
    max = max || 10000;
  
    if (text.length < min || text.length > max) {
        return false;
    }
    return true;
}
  
function hatalarigoster(hata){
    var msg = "Aşağıdaki hataları düzeltip tekrar deneyin...\n";
    var numError;
    for (var i = 0; i<hata.length; i++) {
        numError = i + 1;
        msg += "" + numError + " " + hata[i];
    }
    alert(msg); 
}
    

