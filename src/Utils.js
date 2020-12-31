class util {

pad2(number) {
    return (number < 10 ? "0" : "") + number
}

counterTimer(distance) {
    var h = Math.floor(distance / 3600)
    var hours = this.pad2(h) // show 2 digit
    distance %= 3600
    var m = Math.floor(distance / 60)
    var minutes = this.pad2(m) // show 2 digit
    var s = distance % 60
    var seconds = this.pad2(s) // show 2 digit

    let ret = {
        time: `${hours}:${minutes}:${seconds}`,
        distance: distance,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
    return ret
}

CountDown(distance) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return `day: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds} `
}

}


export default new util()