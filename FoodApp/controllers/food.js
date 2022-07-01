const client = require("../libs/db")

class FoodController{
    static async getAll(req,res){
        const food = await client.food.findMany()
        console.log(food)
        const error = (await req.consumeFlash('error'))[0];
        const success = (await req.consumeFlash('success'))[0];
        return res.render("food",{
            food,
            error,
            success
        })
    }

    static async getAddForm(req,res){
        const categories = await client.category.findMany()
        const error = (await req.consumeFlash('error'))[0];
        const success = (await req.consumeFlash('success'))[0];
        return res.render("admin/addFood",{
            categories,
            error,
            success
        })
    }

    static async add(req,res){
        try {
            const {name,price,description,image,categories} = req.body
            const noCategory = categories.includes("no-category")
            let data = {
                name,
                description,
                image,
                price:parseFloat(price)
            }
            if (!noCategory){
                const categoriesNumbers = categories.map(categoryID=>({categoryID:parseInt(categoryID)}))
                data.categories = {
                    connect:categoriesNumbers
                }
                console.log(categoriesNumbers)
            }
            const food = await client.food.create({
                data
            })
            console.log(food)
            await req.flash('success', 'Food added successfully');
            return res.redirect("/food")
        } catch (error) {
            console.log(error)
            await req.flash('error', 'An error ocurred');
            return res.redirect("/food")
        }
    }

    static async addCategory(req,res){
        try {
            const category = await client.category.create({
                data:req.body
            })
            await req.flash('success', 'Category added successfully');
            return res.redirect("/admin/addFood")
        } catch (error) {
            await req.flash('error', 'An error ocurred');
            return res.redirect("/admin/food")
        }
    }
}

module.exports = FoodController