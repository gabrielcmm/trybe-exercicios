let band = {
  name: "Blind Guardian",
  formedIn: 1986,
  lastAlbum: "Beyond the Red Mirror",
};

let info = {
  genre: "Power Metal",
  lastAlbum: "Twilight Orchestra: Legacy of the Dark Lands",
};

Object.assign(band, info);
console.log(band);
