const client = require("../libs/db")

class FoodController{
    static async getAll(req,res){
        const food = await client.food.findMany({
            include:{
                categories:{
                    include:{
                        category:true
                    }
                }
            }
        })
        console.log(food[3].categories)
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
            let noCategory
            let categoriesNumbers
            let data = {
                name,
                description,
                image,
                price:parseFloat(price)
            }
            if(Array.isArray(categories)){
                noCategory = categories.includes("no-category")
                if (!noCategory){
                    categoriesNumbers = categories.map(categoryID=>({categoryID:parseInt(categoryID)}))
                    data.categories = {
                        create:categoriesNumbers
                    }
                }
            }else{
                if(categories!=="no-category"){
                    categoriesNumbers = [{
                        categoryID:parseInt(categories)
                    }]
                    data.categories = {
                        create:categoriesNumbers
                    }
                }
            }
            const food = await client.food.create({
                // data:{
                //     categories:{
                //         create:[
                //             {
                //                 category:{
                //                     connect:1
                //                 }
                //             },
                //             {
                //                 categoryID:2
                //             },
                //             {
                //                 categoryID:3
                //             }
                //         ]
                //     }
                // }
                data
            })

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

    static async getEditForm(req,res){
        try {
            const id = req.params.id
        
            const food = await client.food.findUnique({
                where:{
                    id:parseInt(id)
                },
                include:{
                    categories:true
                }
            })

            console.log(food)

            const categories = await client.category.findMany()
            const error = (await req.consumeFlash('error'))[0];
            const success = (await req.consumeFlash('success'))[0];

            return res.render("admin/editFood",{
                food,
                categories,
                error,
                success
            })
        } catch (error) {
            console.log(error)
            return res.json({
                message:"An error ocurred"
            })
        }
    }
    static async edit(req,res){
        try {
            const id = parseInt(req.params.id)
            console.log(req.body)
            const {name,price,description,image,categories} = req.body
            await client.foodCategories.deleteMany({
                where:{
                    foodID: id
                }
            })
            let noCategory
            let categoriesNumbers
            let data = {
                name,
                description,
                image,
                price:parseFloat(price)
            }
            if(Array.isArray(categories)){
                noCategory = categories.includes("no-category")
                if (!noCategory){
                    categoriesNumbers = categories.map(categoryID=>({categoryID:parseInt(categoryID)}))
                    data.categories = {
                        create:categoriesNumbers
                    }
                }
            }else{
                if(categories!=="no-category"){
                    categoriesNumbers = [{
                        categoryID:parseInt(categories)
                    }]
                    data.categories = {
                        create:categoriesNumbers
                    }
                }
            }

            const food = await client.food.update({
                where:{
                    id
                },
                data,
                include:{
                    categories:true
                }
            })
            console.log("Food edited",food)


            return res.redirect("/food")
        } catch (error) {
            console.log(error)
            return res.json({message:"An error ocurred"})
        }

    }
}

module.exports = FoodController