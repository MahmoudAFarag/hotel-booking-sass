const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const files = await imagemin(["img/*.{jpg,png}"], {
    destination: "new_img",
    plugins: [imageminWebp({ quality: 50, alphaQuality: 100, method: 6 })],
  });
  console.log(files);
})();
