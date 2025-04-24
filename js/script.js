const khareji = document.getElementById("khareji");
const dakheli = document.getElementById("dakheli");
const photosOfBaner = document.getElementById("three-photo-buy");

addEventListener("click", (event) => {
  if (event.target === khareji) {
    photosOfBaner.children[0].src = "./assets/images/pool.jpg";
    photosOfBaner.children[1].src = "./assets/images/eafle.jpg";
    photosOfBaner.children[2].src = "./assets/images/beach.jpg";
    dakheli.className =
      "btn btn-outline-info rounded-top-4 rounded-start-0 btn-lg";
    khareji.className = "btn btn-info rounded-top-4 rounded-end-0 btn-lg";
  }
  if (event.target === dakheli) {
    photosOfBaner.children[0].src = "./assets/images/azadi.jpg";
    photosOfBaner.children[1].src = "./assets/images/see.jpg";
    photosOfBaner.children[2].src = "./assets/images/mountain.jpg";
    khareji.className =
      "btn btn-outline-info rounded-top-4 rounded-end-0 btn-lg";
    dakheli.className = "btn btn-info rounded-top-4 rounded-start-0 btn-lg";
  }
});

jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr",
});
