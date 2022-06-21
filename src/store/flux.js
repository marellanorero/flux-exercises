const getState = ({ getStore, getActions, setStore }) => {
    return{
        store: {
            name: 'Luis',
            lastname: 'Rodriguez',
            task: [
                "Make the bed",
                "Buy a Coffee"
            ]
        },
        actions: {
            saludo: () => {
                console.log('Hola')
            }
        }
    }
}

export default getState;