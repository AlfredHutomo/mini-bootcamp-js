const umur = 18;

function keSekolah() {}

function keUniversitas() {}

function magang() {}

if (umur < 18) {
  keSekolah();
} else if (umur >= 18 && umur <= 25) {
  keUniversitas();
} else {
  magang();
}

const statusOrang = "belajar";

switch (statusOrang) {
  case "belajar":
    console.log("pelajar");
    break;
  case "berkerja":
    console.log("pekerja");
    break;
  default:
    console.log("belum terdaftar");
    break;
}
