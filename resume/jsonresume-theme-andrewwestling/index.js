const pug = require('pug')
const helper = require('./assets/helper')
const path = require('path')

const render = (resume) => pug.renderFile(path.join(__dirname, 'assets', 'template.pug'), {
  resume,
  helper
})

const pdfRenderOptions = {
  scale: 0.92, // Important to keep it from going to single-column!
};

module.exports = {
  render,
  pdfRenderOptions
}
