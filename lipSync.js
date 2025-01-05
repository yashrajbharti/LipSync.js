const lipSyncTypes = [
  "aei",
  "bmp",
  "cdgknstxyz",
  "chjsh",
  "ee",
  "fv",
  "l",
  "o",
  "qw",
  "r",
  "th",
  "u",
];

const mouth = document.querySelector(".mouth");

setInterval(() => {
  mouth.setAttribute("data-letters", lipSyncTypes[~~(Math.random() * 12)]);
}, 500);
