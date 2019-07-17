let var1, var2, hasil;
let operasi = '';

// maaf mas, saya pake function (di sesi 2 belum diajari function), soalnya sulit implementasi cuma dengan DOM, looping & seleksi kondisi tanpa pake function
function hitung(){	
	if(operasi == "penjumlahan"){
		hasil = var1+var2;
	}
	else if(operasi == "pengurangan"){
		hasil = var1-var2;
	}
	else if(operasi == "perkalian"){
	 	hasil = var1*var2;
	}
	else{
		hasil = var1/var2;
	}
	document.getElementById('panel').value = hasil;
}