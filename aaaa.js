const axios = require('axios')
    /**
     * Функция для добавления нового пользователя
     * @param {Object} userInfo
     * @param {String} userInfo.email - емайл
     * @param {String} userInfo.username - логин
     * @param {String} userInfo.password - пароль
     * @param {Object} userBio
     * @param {Object} userBio.name
     * @param {String} userBio.name.firstname
     * @param {String} userBio.name.lastname
     * @param {String} userBio.phone - телефон пользователя
     * @param userAddress
     * @returns {Promise<{userId: null}>}
     */
    async function addNewUser(userInfo, userBio, userAddress){
        const data = {
            userId: null,
        };
        try {
            const url = 'https://fakestoreapi.com/users'

            const body = {
                email:"userInfo.email",
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
            }

            const response = await axios.post(url,body)
            console.log(response.data);
            if (response.data.id) {
                console.log('Пользователь создан');

                data.userId = response.data.id
            }
        }
        catch (e) {
            console.log(e.message, e.stack);
        }
        return data
    }
addNewUser()
    // async function getProducts(){
    //         const data = await axios.get(url:'https://fakestoreapi.com/products')
    //     console.log(response.data);
    // }
    //
    // catch (err) {
    //     console.log(err);
    // }
    //
    // const b= getProducts()
