const axios = require('axios')
async function getUser() {
    try {
        const response = await axios.get('https://fakestoreapi.com/docs/products');
        console.log(response.data);

        try {
            const response = await axios.get('https://fakestoreapi.com/docs/products');
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }

        /**
         * функция для добавления нового пользователя
         * @param {Object}userInfo
         * @param {Object}userBio
         * @param {}userAddres
         *
         * @returns {Promise<void>}
         */
        async function addNetUser(userInfo, userBio, userAddres) {
            try {
                const url = ('https://fakestoreapi.com/users')
            }
        }
    }

        // отдел функц котор получ все продукты
        // функ которо будет получ только 1 продукт по id
        // фунц на добавл продукта функ должн приним данные котор необходимы для созд нов продукта и id
        // функц на обновл прод  приём id
        // функц котор сделет апросна получ всх прод
        // функ на удал прод id и проверка что прод удал
        // рандомно берёт продукт и удаляет его

