const tampilIn = () => {
    let getHari = document.getElementById("hari");
    let valueHari = getHari.options[getHari.selectedIndex].value;
    
    let getPasaran = document.getElementById("pasaran");
    let valuePasaran = getPasaran.options[getPasaran.selectedIndex].value;

    document.getElementById("tampil").innerHTML = hitungNeptu(valueHari, valuePasaran);
}

const hitungNeptu = (hari, pasaran) => {
    return parseInt(hari) + parseInt(pasaran);
}

    