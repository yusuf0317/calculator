//insert angka ketextview
function insert(num) {
    document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi hitung
function equal() {
    let hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

//Clean
function clean() {
    document.form.textarea.value = "";
}

// Delete
function back() {
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}