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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
    },
]

module.exports = {
    getAll: (req, res) => {
        res.send(recipes)
    }
}