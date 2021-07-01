import {firestore} from '../../firebase';

const coffee_db = firestore.collection("Coffee");

const LOAD = "coffee/LOAD";
const CREATE = "coffee/CREATE";
const DELETE = "coffee/DELETE";
const UPDATE = "coffee/UPDATE";

const initialState = {
    list: []
}

// Action Creators

export const loadCoffee = (coffee) => {
    return { type: LOAD, coffee }
}

export const createCoffee = (coffee) => {
    return { type: CREATE, coffee }
}

export const deleteCoffee = (coffee) => {
    return { type: DELETE, coffee }
}

export const updateCoffee = (coffee,coffeeObj) => {
    return { type: UPDATE, coffee, coffeeObj }
}

export const loadCoffeeFB = () => {
    return function (dispatch) {
        let coffee_data = []

        coffee_db.get().then((docs) => {
            
            docs.forEach((doc) => {
                if(doc.exists){
                    coffee_data.push({id: doc.id, ...doc.data()});
                }
            })
            dispatch(loadCoffee(coffee_data));
        })
    }
}

export const addCoffeeFB = (word,explain,recommend) => {
    return function (dispatch){
        let coffee_data = {word: word, explain:explain, recommend:recommend}

        coffee_db.add(coffee_data).then(docRef => {
            coffee_data = {...coffee_data, id: docRef.id};
            dispatch(createCoffee(coffee_data));
        })
    }
}

export const updateCoffeeFB = (index,coffeeObj) => {
    return function (dispatch, getState){
        const coffee_data = getState().coffee.list[index]

        if(!coffee_data.id) return;

        coffee_db.doc(coffee_data.id).update(coffeeObj).then((res)=> {
            dispatch(updateCoffee(coffee_data.id,{id:coffee_data.id,...coffeeObj}));
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const deleteCoffeeFB = (index) => {
    return function (dispatch, getState){
        const _bucket_data = getState().coffee.list[index];

        if(!_bucket_data.id){
            return;
        }

        coffee_db.doc(_bucket_data.id).delete().then(docRef => {
            dispatch(deleteCoffee(index));
        }).catch(error => {
            console.log(error)
        })
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case "coffee/LOAD": {
            if(action.coffee.length > 0){
                return {list: action.coffee}
            }
            return {list : state.list}
        }

        case "coffee/CREATE": {
            const new_coffee_list = [...state.list, action.coffee]
            return { list: new_coffee_list};
        }

        case "coffee/UPDATE": {
            const coffee_list = [...state.list].map((listItem,idx) => {
                if(listItem.id === action.coffee){
                    return action.coffeeObj;
                }
                return listItem;
            })
            return { list: coffee_list };
        }

        case "coffee/DELETE": {
            const coffee_list = state.list.filter((list,index) => {
                if(index !== action.coffee){
                    return list;
                }
            })
            return { list: coffee_list };
        }
    default:
        return state;
    }

}