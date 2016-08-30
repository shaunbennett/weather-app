const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requesthandler)

server .listen(port, (error) => {
    if(error) {
        return console.log('something bad happened', error)
    }

    console.log(`server is listening on ${port}`)
})