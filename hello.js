let kullanicilar = [
    { kullaniciAdi: "enescadirli", şifre: "şifrem123" },
    { kullaniciAdi: "baranbilge", şifre: "şifrem234" },
    { kullaniciAdi: "egek", şifre: "şifrem678" }
];

let secim = prompt("Yapmak istediğiniz işlemi seçin:\n1. Giriş Yap (giriş)\n2. Kayıt Ol (kayıt)\n3. Çık (çık)");

if (secim === "giriş") {
let girilenIsim = prompt("Kullanıcı Adı Giriniz");
let girilenSifre = prompt("Şifre giriniz");

let kullaniciBulundu = false;

for (let i = 0; i < kullanicilar.length; i++) {
if (kullanicilar[i].kullaniciAdi === girilenIsim && kullanicilar[i].şifre === girilenSifre) {
    kullaniciBulundu = true;
    break;
        }
     }

if (kullaniciBulundu) {
console.log("Giriş başarılı!");
} else {
console.log("Kullanıcı adı veya şifre yanlış.");
    }
} else if (secim === "kayıt") {
let yeniIsim = prompt("Yeni kullanıcı adı giriniz");
let yeniSifre = prompt("Yeni şifre giriniz");
let isimAlindi = false;

for (let i = 0; i < kullanicilar.length; i++) {
if (kullanicilar[i].kullaniciAdi === yeniIsim) {
isimAlindi = true;
break;
        }
    }

if (isimAlindi) {
console.log("Bu kullanıcı adı zaten alınmış. Başka bir ad seçin.");
    } 
    else {
        kullanicilar.push({ kullaniciAdi: yeniIsim, şifre: yeniSifre });
        console.log("Kayıt başarılı!");
    }
} 
else if (secim === "çık") {
    console.log("Çıkış yapılıyor...");
} 

else {
    console.log("Geçersiz işlem seçimi.");
}
