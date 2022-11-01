const RecipeModel = require('../models/recipe-model');
const ApiError = require('../exceptions/api-error');

module.exports = {
    async findMany() {
        return RecipeModel.find({}).exec()
    },
    async findById(_id) {
        return RecipeModel.findById(_id).exec()
    },
    async findByString(q) {
        let query = {
            '$or': [
            ]
        }
        for (let i = 0; i < q.length; i++) {
            query['$or'].push({
                'ingredients.name': {
                    '$regex': q[i],
                    '$options': 'i'
                }
            })
        }
        return RecipeModel.find(query).exec()
    },
    // async changeRating(_id, item, action, userEmail) {
    //     let modify = { $inc: {}, }

    //     if (item == 'likes') {
    //         if (action == 'incr') {
    //             modify.$inc = {
    //                 likes: 1
    //             }
    //             modify.$push = {
    //                 'likedBy': { email: userEmail }
    //             }
    //         } else {
    //             modify.$inc = {
    //                 likes: -1
    //             }
    //             modify.$pull = {
    //                 'likedBy': { email: userEmail }
    //             }
    //         }
    //     } else if (item == 'reposts') {
    //         modify.$inc = {
    //             reposts: 1
    //         }
    //     }
    //     return RecipeModel.findOneAndUpdate({ _id }, modify).exec()
    // },
    async like(_id, action, userEmail) {
        let query = { '$inc': {} }
        if (action == 'inc') {
            query['$inc'] = {
                likes: 1
            }
            query['$push'] = {
                'likedBy': { email: userEmail }
            }
        } else {
            query['$inc'] = {
                likes: -1
            }
            query['$pull'] = {
                'likedBy': { email: userEmail }
            }
        }

        return RecipeModel.findOneAndUpdate({ _id }, query).exec()
    },
    async share(_id, userEmail) {
        return RecipeModel.findByIdAndUpdate({ _id }, {
            '$inc': {
                reposts: 1
            },
            '$push': {
                sharedBy: {
                    email: userEmail
                }
            }
        })
    },
    async deleteAll() {
        RecipeModel.deleteMany({}).then((r) => {
            console.log(r);
        })
        return;
    },

    async insertOne() {
        const r = await RecipeModel.create({
            author: 'Савелий Шутов',
            title: "Оякодон",
            previewImage: 'https://www.gastronom.ru/binfiles/images/20160428/b2204fbc.jpg',
            ingredients: [
                { name: 'Круглозёрный Рис', amount: '2 пакетика по 80 г' },
                { name: 'Соевый соус', amount: '4 ст. л.' },
                { name: 'Репчатый лук', amount: '1' },
                { name: 'Куриное яйцо', amount: '5' },
                { name: 'Мирин (или полусладкое белое вино)', amount: '4 ст. л.' },
                { name: 'Ростки сои' }
            ],
            portions: 4,
            time: "1 ч 30 минут",
            likes: 1,
            likedBy: [
                // {
                //     email: "grishadzyin@gmail.com"
                // },
                {
                    email: "smbd@gmail.com"
                }
            ],
            reposts: 12,
            comments: 102,
            firstComment: {
                author: 'Гриша Дзюин',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores odit placeat laudantium, voluptates inventore assumenda consequatur maxime ad tempora numquam non doloribus veniam ipsa velit! Quibusdam rerum officiis ducimus.'
            },
            steps: [
                {
                    image: 'https://www.gastronom.ru/binfiles/images/20160428/bf407d58.jpg',
                    description: 'Промойте рис, пока вода не станет прозрачной. Положите в миску и залейте водой, оставьте на 1 ч. Переложите рис в кастрюлю, залейте 350 мл холодной воды, доведите до кипения на сильном огне, уменьшите огонь до минимального и накройте крышкой. Варите 20 мин.'
                },
                {
                    image: 'https://www.gastronom.ru/binfiles/images/20160428/b5dbf434.jpg',
                    description: 'Яйца слегка взбейте вилкой. Луковицу очистите и нарежьте перьями. Куриное филе нарежьте небольшими кусочками.'
                },
                {
                    image: 'https://www.gastronom.ru/binfiles/images/20160428/b98256c6.jpg',
                    description: 'Налейте в широкий сотейник даши, соевый соус и мирин, добавьте сахар и доведите до кипения. Положите репчатый лук, на него разложите кусочки курицы и готовьте, потряхивая сотейник, 5 мин.'
                },
                {
                    image: 'https://www.gastronom.ru/binfiles/images/20160428/bf8863eb.jpg',
                    description: 'Положите на курицу ростки сои, вылейте взбитые яйца и сразу убавьте огонь до минимального. Накройте сотейник крышкой и оставьте на 30 сек., затем выключите огонь. Не открывайте крышку еще 1 мин. Яйца должны схватиться, но не превратиться в омлет. Разложите по мискам рис, сверху выложите курицу в соусе. Посыпьте нарезанным зеленым луком и подавайте.'
                }
            ],
            description: "Оякодон – одно из любимых блюд японцев. В переводе с японского «оякодон» означает «родители и дети» – ведь в его составе есть и курица, и яйцо. Готовится оно быстро и просто, а продукты, которые нужны для этого блюда, всегда под рукой. Его едят дома, продают в закусочных на обед, готовят в ресторанах",
            health: {
                protein: 25.8,
                fat: 14.9,
                carbohydrates: 67,
                kcal: 530.6
            }
        });
        console.log(r);
        return;
    }
}