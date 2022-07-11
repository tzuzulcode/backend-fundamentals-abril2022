const prisma = require("../libs/db")
const transporter = require("../libs/email")

class OrdersController{
    static async getActualOrder(req,res){
        const {activeOrder} = req.session.user
        
        const order = await prisma.order.findUnique({
            where:{
                id: activeOrder
            },
            include:{
                food:{
                    include:{
                        food:true
                    }
                }
            }
        })

        return res.render("order",{
            order
        })
    }

    static async getCompletedOrders(req,res){
        const {id} = req.session.user
        const orders = await prisma.order.findMany({
            where:{
                userID:id,
                completed:true
            },
            include:{
                food:{
                    include:{
                        food:true
                    }
                }
            }
        })


        return res.render("orders",{
            orders
        })
    }

    static async makeOrderCompleted(req,res){
        const {activeOrder,id,email} = req.session.user
        const order = await prisma.order.update({
            where:{
                id:activeOrder
            },
            data:{
                completed:true
            }
        })

        const result = await transporter.sendMail({
            from: '"Tzuzul 👻" <mail@tzuzulcode.com>', // sender address
            to: email, // list of receivers
            subject: "Confirm order ✔", // Subject line
            text: "Orden confirmada", // plain text body
            html: "<h1>Orden confirmada</h1>", // html body
        })

        console.log(result)

        const newOrder = await prisma.order.create({
            data:{
                completed:false,
                user:{
                    connect:{
                        id
                    }
                }
            }
        })

        const user = await prisma.user.update({
            data:{
                activeOrder:newOrder.id
            },
            where:{
                id
            }
        })

        req.session.user.activeOrder = newOrder.id

        return res.redirect("/orders/completed")
    }

    static async addFood(req,res){
        const {activeOrder} = req.session.user
        const {idFood} = req.params

        const order = await prisma.order.update({
            where:{
                id:activeOrder
            },
            data:{
                food:{
                    create:{
                        food:{
                            connect:{
                                id:parseInt(idFood)
                            }
                        }
                    }
                }
            }
        })

        return res.redirect("/orders")
    }

    static async deleteFood(req,res){
        const {activeOrder} = req.session.user
        const {idFood} = req.params

        const order = await prisma.order.update({
            where:{
                id:activeOrder
            },
            data:{
                food:{
                    deleteMany:{
                        foodID:parseInt(idFood)
                    }
                }
            }
        })

        return res.redirect("/orders")
    }

}


module.exports = OrdersController