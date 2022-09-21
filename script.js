function submit_form() {
  var n = document.getElementById("n1").value;
  var p = document.getElementById("p1").value;
  var pp = document.getElementById("p2").value;
  var cp = document.getElementById("p3").value;

  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;

  //other
  if(n==''||p==''){
      alert("Masukan Data Dengan Benar");
  }
  else if(!letters.test(n)) {
      alert('Text data hanya diisi dengan alpabet');
  }
  else if(!numbers.test(p)){
    alert("Isi harus dalam bentuk angka");
  }
  else if(document.getElementById("p2").value.length > 4) {
      alert("Panjang maximum data RT 4 karakter");
  }
  else if(document.getElementById("p3").value.length < 4) {
      alert("Panjang maximum data RW 4 karakter");
  }
  else {
      alert("Data berhasil tersubmit");
      window.location="http://fajarbaskoro.blogspot.com/";
  }
}
