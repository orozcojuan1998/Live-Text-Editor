const log = console.log
// initialize http server, socket.io and port number
const http = require('http').createServer()
const io = require('socket.io')(http)
http.listen('localhost', () =>)
io.on('connection', (socket) => {
    log('connected')
    socket.on('message', (evt) => {
        log(evt)
        socket.broadcast.emit('message', evt)
    })
})
io.on('disconnect', (evt) => {
    log('some people left')
})
