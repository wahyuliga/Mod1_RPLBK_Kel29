const tampilIn = () => {
    let getHari = document.getElementById("hari");
    let valueHari = getHari.options[getHari.selectedIndex].value;
    
    let getPasaran = document.getElementById("pasaran");
    let valuePasaran = getPasaran.options[getPasaran.selectedIndex].value;

    let getHariPasangan = document.getElementById("hari_pasangan");
    let valueHariPasangan = getHari.options[getHariPasangan.selectedIndex].value;
    
    let getPasaranPasangan = document.getElementById("pasaran_pasangan");
    let valuePasaranPasangan = getPasaran.options[getPasaranPasangan.selectedIndex].value;

    document.getElementById("tampil").innerHTML = hitungNeptu(valueHari, valuePasaran, valueHariPasangan, valuePasaranPasangan);
    document.getElementById("arti").innerHTML = artiNya();
}

const hitungNeptu = (hari, pasaran, hari_pasangan, pasaran_pasangan) => {
    neptu_anda = parseInt(hari) + parseInt(pasaran);
    neptu_pasangan = parseInt(hari_pasangan) + parseInt(pasaran_pasangan);
    return neptu = neptu_anda + neptu_pasangan
}

const artiNya = () => {    
    const pegat = [1, 9, 10, 18, 19, 27, 28, 36];
    const ratu = [2, 11, 20, 29];
    const jodo = [3, 12, 21, 30];
    const topo = [4, 13, 22, 31];
    const tinari = [5, 14, 23, 32];
    const padu = [6, 15, 24, 33];
    const sujanan = [7, 16, 25, 34];
    const pesthi = [8, 17, 26, 35];
    let arti;

    pegat.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Pegat</h3> Masalah yang sering ditemui oleh pasangan PEGAT ini di kemudian hari mulai dari masalah ekonomi, kekuasaan, perselingkuhan yang bisa menyebabkan pasangan tersebut bercerai atau pegatan." : "";   
    });
    ratu.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Ratu</h3> Bisa dibilang pasangan tersebut memang sudah jodohnya. Dihargai dan disegani oleh tetangga dan lingkungan sekitar. Saking harmonisnya, bahkan banyak orang yang iri akan keharmonisannya dalam membina rumah tangga." : "";
    });
    jodo.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Jodo</h3> Pasangan tersebut memang beneran cocok dan berjodoh. Pasangan ini bisa saling menerima segala kelebihan dan kekurangan masing-masing. Rumah tangga pasangan JODOH ini bisa rukun sampai tua." : "";
    });
    topo.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Topo</h3> Dalam membina rumah tangga, pasangan TOPO akan sering mengalami kesusahan di awal musim karena masih saling memahami tapi akan bahagia pada akhirnya. Masalah yang dihadapi bisa saja soal ekonomi dan lainnya. Nah, saat sudah memiliki anak dan cukup lama berumah tangga, akhirnya akan hidup sukses dan bahagia." : "";
    });
    tinari.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Tinari</h3> Pasangan TINARI akan menemukan kebahagiaan. Dalam mencari rezeki diberikan kemudahan dan nggak sampai hidup kekurangan. Selain itu, hidupnya juga sering mendapat keberuntungan." : "";
    });
    padu.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Padu</h3> Dalam berumah tangga, pasangan PADU akan sering mengalami pertengkaran. Tapi Bela, meskipun sering bertengkar, nggak sampai cerai. Masalah pertengkaran tersebut bahkan bisa dipicu dari hal-hal yang sifatnya cukup sepele." : "";
    });
    sujanan.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Sujanan</h3> Dalam berumah tangga, pasangan SUJANAN akan sering mengalami pertengkaran dan masalah perselingkuhan. Bisa itu dari pihak laki-laki maupun perempuan yang memulai perselingkuhan tersebut." : "";
    });
    pesthi.forEach((angka) => {
        arti = (angka==this.neptu) ? document.getElementById("arti").innerHTML = "<h3>Pesthi</h3> Dalam berumah tangga, pasangan PESTHI akan rukun, tenteram, damai sampai tua. Meskipun ada masalah apapun nggak akan sampai merusak keharmonisan keluarga." : "";
    });
    return arti, angka;
}



    