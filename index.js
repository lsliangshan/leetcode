const http = require('http')
const fs = require('fs')
const path = require('path')

let script = process.env.npm_lifecycle_script
let port = script.indexOf('port=') > -1 ? Number(script.replace(/^(.*)(port=)(\d{1,})(.*)$/, '$3')) : 80

function walkDir (dir) {
  let outFiles = []
  fs.readdir(dir, (err, files) => {
    if (err) {

    } else {
      files.forEach(filename => {
        let fileDir = path.join(dir, filename)
        fs.stat(fileDir, (error, stats) => {
          if (error) {

          } else {
            let isFile = stats.isFile()
          }
        })
      })
    }
    return outFiles
  })
}

http.createServer(function (req, res) {
  console.log(`${path.resolve()}/questions`)
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("holloe  world")
  res.end("fdsa");
}).listen(port)

console.log('服务已启动：http://127.0.0.1:' + port)
