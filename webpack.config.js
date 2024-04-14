const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: "Nunito" } // Добавьте здесь другие шрифты, если нужно
      ]
    })
  ]
};
