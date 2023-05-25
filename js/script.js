function hitungluas() {  // Tambahkan function hitung luas persegi
    var sisiluas = document.getElementById('sisi-luas').value; // 

    var luas = sisiluas*sisiluas;
    var perhitungan = sisiluas + " " + "x" + " " + sisiluas;

    console.log(sisiluas);
    document.getElementById('output_luas').innerHTML = luas;
    document.getElementById('perhitungan-luas').innerHTML = perhitungan;

}


function resetluas() {
    document.getElementById("form-luas").reset();
}

function hitungkeliling() {
    var sisikeliling = document.getElementById('sisi-keliling').value;

    var keliling = 4*sisikeliling;
    var perhitungan = sisikeliling;

    console.log(sisikeliling);
    document.getElementById('output_keliling').innerHTML = keliling;
    document.getElementById('perhitungan-keliling').innerHTML = perhitungan;
}

function resetkeliling() {
    document.getElementById("form-keliling").reset();
}







