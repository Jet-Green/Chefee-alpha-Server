const recipes = [
    {
        id: 1,
        author: 'Савелий Шутов',
        title: "Оякодон",
        previewImage: 'https://www.gastronom.ru/binfiles/images/20160428/b2204fbc.jpg',
        ingredients: [
            { name: 'Круглозёрный Рис', amount: '2 пакетика по 80 г', youHave: false },
            { name: 'Соевый соус', amount: '4 ст. л.', youHave: false },
            { name: 'Репчатый лук', amount: '1', youHave: false },
            { name: 'Куриное яйцо', amount: '5', youHave: false },
            { name: 'Мирин (или полусладкое белое вино)', amount: '4 ст. л.', youHave: false },
            { name: 'Ростки сои', youHave: false }
        ],
        portions: 4,
        time: "1 ч 30 минут",
        likes: 423,
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
    },
    {
        id: 2,
        author: 'Савелий Шутов',
        title: "Оякодон",
        previewImage: 'https://www.gastronom.ru/binfiles/images/20160428/b2204fbc.jpg',
        ingredients: [
            { name: 'Круглозёрный Рис', amount: '1', youHave: false },
            { name: 'Соевый соус', amount: '4 ст. л.', youHave: false },
            { name: 'Репчатый лук', amount: '1', youHave: false },
            { name: 'Куриное яйцо', amount: '5', youHave: false },
            { name: 'Мирин (или полусладкое белое вино)', amount: '4 ст. л.', youHave: false },
            { name: 'Ростки сои', youHave: false }
        ],
        portions: 4,
        time: "1 ч 30 минут",
        likes: 423,
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
    },
]

const RecipeService = require('../service/recipe-service')

module.exports = {
    async getAll(req, res, next) {
        try {
            return res.json(await RecipeService.findMany())
        } catch (error) {
            next(error);
        }
    },
    async getById(req, res, next) {
        try {
            const _id = req.query.id
            return res.json(await RecipeService.findById(_id));
        } catch (error) {
            next(error);
        }
    },
    async findByString(req, res, next) {
        try {
            let q = req.query.request;
            return res.json(await RecipeService.findByString(q))
        } catch (error) {
            next(error)
        }
    },
    insertOne(req, res, next) {
        try {
            RecipeService.insertOne()
        } catch (error) {
            next(error);
        }
    },
    deleteAll() {
        RecipeService.deleteAll()
    },
    async changeRating(req, res, next) {
        try {
            const { _id, item, action, userEmail } = req.body;
            return res.json(await RecipeService.changeRating(_id, item, action, userEmail));
        } catch (error) {
            next(error);
        }
    },

}