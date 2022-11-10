// Your code here
console.log('I works')


const posterCont = document.getElementById('cont')
const posterTitle = document.getElementById('title')
const posterRunTime = document.getElementById('runtime')
const posterShowTime = document.getElementById('showtime')
const posterTickets = document.getElementById('ticket-num')

const filmList = document.getElementById('films')
const filmItem = document.getElementById('film-title')

const btn = document.getElementById('buy-ticket')

let request = async() => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()

    console.log(res[0].id)
    let poster = document.getElementById('poster')
    poster.src = res[0].poster
    

    posterTitle.innerText = res[0].title
    posterRunTime.innerText = res[0].runtime
    posterShowTime.innerText = res[0].showtime
    posterTickets.innerText = res[0].capacity - res[0].tickets_sold
        
        let ticketLeft = parseInt(posterTickets.innerText)
        btn.addEventListener('click', () => {
            if (ticketLeft >= 3){ 
                ticketLeft = ticketLeft - 1
                posterTickets.innerText = '2'
            }else if( ticketLeft >= 2 ) {
                ticketLeft = ticketLeft - 1
                posterTickets.innerText = '1'
            }else (
                ticketLeft = 0,
                posterTickets.innerText = '[X]'
            )
        })
        


    res.forEach((obj) => {
        let li = document.createElement('li')
        li.innerText = obj.title
        filmList.appendChild(li)
    })
}


request()