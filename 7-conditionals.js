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

const statusOrang = "cerai";

switch (statusOrang) {
  case "single":
    console.log("single");
    break;
  case "menikah":
    console.log("menikah");
    break;
  default:
    console.log("gatau nih");
    break;
}
