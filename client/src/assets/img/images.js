const imageContext = require.context('./', false, /\.(png|jpe?g|svg)$/);

const images = imageContext.keys().map(imageContext);

export default images;