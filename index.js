function addSongToQueue(song) {
    queue.push(song)
}

function removeFirstSongFromQueue() {
    if (queue[0]) {
        return queue.shift()
    }
    else {
        console.log('Song queue is empty. Please add more songs')
    }
}

function removeSongFromQueue(song) {
    if (isSongInQueue(song)) {
        const indexSong = queue.indexOf(song)
        queue.splice(indexSong, 1)
    }
    else {
        console.log(`${song} is not in the queue`)
    }
}

function printQueue() {
    for (let i = 0; i < queue.length; i++) {
        console.log(`${i+1}. ${queue[i].name} by ${queue[i].artist}, genre is ${queue[i].genre}`)
    }
}

function isSongInQueue(song) {
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].name === song) {
            return true
        }
    }
    return false
}

queue = []
addSongToQueue({
    name: "I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID",
    artist: 'Backstreet boys',
    genre: 'YES',
})
removeSongFromQueue("I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID")
addSongToQueue({
    name: "I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID",
    artist: 'Backstreet boys',
    genre: 'YES',
})
printQueue()