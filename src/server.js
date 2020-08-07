
const proffys = [
    { 
        name: "Jhonatan Gomes", 
        avatar: "https://avatars3.githubusercontent.com/u/65189248?s=460&u=c579c34ea15b686b3a5dc3912b208bfebfe0b51b&v=4", 
        whatsapp:"96991054095",
        bio: "Apaixonado pela informática aplicada a educação, e com grandes chance de ser professor na área",
        subject: "Informática",
        cost: "35",
        weekday: "[0]",
        time_from: "[732]",
        time_to: "[1732]" 
    },
    { 
        name: "Jonh Isen", 
        avatar: "https://avatars3.githubusercontent.com/u/65189248?s=460&u=c579c34ea15b686b3a5dc3912b208bfebfe0b51b&v=4", 
        whatsapp:"96991054095",
        bio: "Apaixonado pela informática aplicada a educação, e com grandes chance de ser professor na área",
        subject: "Informática",
        cost: "35",
        weekday: "[4]",
        time_from: "[732]",
        time_to: "[1732]" 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject (subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
        const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNoEmpty = Object.keys(data).length > 0
        if (isNoEmpty) {
            data.subject = getSubject(data.subject)
            proffys.push(data)
            return res.redirect("/study")
        }
    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos
server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)


