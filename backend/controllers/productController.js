const {
    Product,
    Order
} = require('../models')

class Controller {

    static async detail(req, res, next) {
        try {
            const id = req.params.id
            const detailProduct = await Product.findOne({
                where: {
                    id
                }
            })
            if (!detailProduct) {
                throw ({
                    message: 'NotFound'
                })
            } else {
                res.status(200).json(detailProduct)
            }
        } catch (error) {
            next(error)
        }
    }

    static async addOrder(req, res, next) {
        try {
            let id = req.params.productId;
            let UserId = req.user.id;
            let findProduct = await Product.findByPk(id)

            if (!findProduct) {
                throw ({
                    name: 'NotFound'
                })
            }

            if (findProduct.quantity < 1) {
                throw ({
                    name: 'NotEnoughQuantity'
                })
            }

            let data = await Order.create({
                UserId,
                ProductId: id
            });

            // Mengurangi Product.quantity
            await findProduct.decrement('quantity', {
                by: 1
            });

            const {
                createdAt,
                updatedAt,
                ...rest
            } = data.dataValues;
            const result = {
                rest,
                findProduct
            };

            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }


    static async orderedProduct(req, res, next) {
        try {
            let id = req.user.id;
            let data = await Order.findAll({
                include: {
                    model: Product,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                where: {
                    UserId: id
                },
            });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async findAll(req, res, next) {
        try {
            let data = await Product.findAll({
                order: [
                    ['name', 'ASC']
                ]
            });
            res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    static async addProduct(req, res, next) {
        try {
            let {
                name,
                imgUrl,
                price,
                quantity
            } = req.body
            let newProduct = await Product.create({
                name,
                imgUrl,
                price,
                quantity
            })
            res.status(201).json({
                id: newProduct.id,
                name: newProduct.name,
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller