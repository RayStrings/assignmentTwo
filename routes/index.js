const router = require('express').Router();

const students = [
    {
        name: "Raymond Addo",
        DOB: "14/07/2000",
        program: "BSC CS",
        level: "300",
        image:"/images/Ray.jpg"
    },
    {
        name: "Aaron Bruce",
        DOB: "12/25/2000",
        program: "BSC CS",
        level: "400",
        image:"/images/Aaron.jpg"
    },
    {
        name: "Fred Obeng",
        DOB: "12/03/2001",
        program: "BSC IT",
        level: "200",
        image :"/images/Obeng.jpg"
    },
    {
        name: "Sarkodie",
        DOB: "06/12/1999",
        program: "BSC CS",
        level: "100",
        image:"/images/Sark.jpg"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;