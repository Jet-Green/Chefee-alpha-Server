const recipes = [
    {
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
    {
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

module.exports = {
    getAll: (req, res) => {
        res.send(recipes)
    }
}