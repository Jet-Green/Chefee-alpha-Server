const recipes = [
    {
        id: 1,
        author: 'Савелий супер повар',
        title: "Лапша Японская",
        ingredients: ["Лапша", "Репчатый лук", "Куриное яйцо", "Куриное филе", "Рис", "Болгарский перец", "Морковь"],
        portions: 6,
        time: "40 минут",
        healthIndex: 7.5,
        likes: 423,
        reposts: 71,
        comments: 102,
        firstComment: {
            author: 'Гриша Дзюин',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolores odit placeat laudantium, voluptates inventore assumenda consequatur maxime ad tempora numquam non doloribus veniam ipsa velit! Quibusdam rerum officiis ducimus.'
        },
        description: "Оякодон — разновидность традиционного японского блюда донбури, представляющего собой круглую чашу с рисом, дополненную различными ингредиентами, от куска свинины или говядины до угря. Если верить источникам, оякодон придумали в Осаке около 1900 года, бросив на рис кусочки курицы с весенним луком и залив их яйцом. Название блюда, к слову, буквально означает на японском «мать и дитя». Кстати, готовить оякодон можно не только с курицей, с говядиной тоже вкусно. И еще это не только завтрак — он может быть и обедом, и ужином."
    },
    {
        id: 2,
        author: 'Савелий супер повар',
        title: "Лапша Японская",
        ingredients: ["Лапша", "Репчатый лук", "Куриное яйцо", "Куриное филе", "Рис", "Болгарский перец", "Морковь"],
        portions: 6,
        time: "40 минут",
        healthIndex: 7.5,
        likes: 423,
        reposts: 71,
        comments: 102,
        firstComment: {
            author: 'Гриша Дзюин',
            text: 'Мне не понравилось и очень дорого получается'
        },
        description: "Оякодон — разновидность традиционного японского блюда донбури, представляющего собой круглую чашу с рисом, дополненную различными ингредиентами, от куска свинины или говядины до угря. Если верить источникам, оякодон придумали в Осаке около 1900 года, бросив на рис кусочки курицы с весенним луком и залив их яйцом. Название блюда, к слову, буквально означает на японском «мать и дитя». Кстати, готовить оякодон можно не только с курицей, с говядиной тоже вкусно. И еще это не только завтрак — он может быть и обедом, и ужином."
    },
]

function isInIngrs(ingrs, req) {
    for (let ingr of ingrs) {
        if (ingr.toLowerCase().includes(req))
            return true;
    }
    return false;
}

module.exports = {
    getAll: (req, res) => {
        res.send(recipes)
    },
    getById: (req, res) => {
        res.send(recipes.find((rec) => rec.id == req.query.id))
    },
    getByStr: (req, res) => {
        let result = []
        let request = req.query.request.toLowerCase()
        for (let rec of recipes) {
            if (rec.title.toLowerCase().includes(request)
                ||
                rec.author.toLowerCase().includes(request)
                ||
                isInIngrs(rec.ingredients, request)
            ) {
                result.push(rec);
            }
        }
        res.send(result)
    }
}