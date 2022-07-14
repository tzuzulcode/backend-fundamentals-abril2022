const {User,Food,Category} = require("./models")

// User.findAll()
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error)
// })

// User.findOne({
//     where:{
//         email:"mail@tzuzulcode.com"
//     }
// }).then(result=>{
//     console.log(result)
// })
// .catch(error=>{
//     console.log(error)
// })


async function queries(){
    const food = await Food.create({
        name:"Pasticho",
        price:100.5,
        description:"Descripción del platillo",
        image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        time:10
    })
    console.log(food)
    const category = await Category.create({
        name:"Venezolana"
    })
    console.log(category)

    const result = await food.addCategory(category)

    console.log(result)
    const oneFood = await Food.findOne({
        where:{
            id:food.id
        },
        include:[
            {model:Category}
        ]
    })

    console.log(oneFood)
}

queries()