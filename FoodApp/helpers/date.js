function parseDate(string){
    const date = new Date(string)

    let day = date.getDate()
    day = day<10 ? "0"+day:day
    let month = date.getMonth()+1
    month = month<10 ? "0"+month:month
    const year = date.getFullYear()

    return `${year}-${month}-${day}`
}

module.exports = {
    parseDate
}