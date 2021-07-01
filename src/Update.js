import React , {useRef}from 'react';
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import { updateCoffeeFB } from './redux/modules/coffee';



const UpdateNew = (props) => {
    const dispatch = useDispatch();
    const coffee_list = useSelector(state => state.coffee.list);
    
    const WordInput = useRef();
    const ExplainInput = useRef();
    const RecommendInput = useRef();

    const updateBtn = () => {
        const newWord = WordInput.current.value;
        const newExplain = ExplainInput.current.value;
        const newRecommend = RecommendInput.current.value;
        
        const coffeeObj = {
            word: newWord,
            explain: newExplain,
            recommend: newRecommend,
        }
        
        dispatch(updateCoffeeFB(coffee_index,coffeeObj))
        props.history.push('/')
    }

    let coffee_index = parseInt(props.match.params.index);

    return (
        <>
            <NewCoffee>
                <strong>종류</strong>
                <input type="text" placeholder={coffee_list[coffee_index]&&coffee_list[coffee_index].word} ref={WordInput} ></input>
            </NewCoffee>
            <NewCoffee>
                <strong>설명</strong>
                <input type="text" placeholder={coffee_list[coffee_index]&&coffee_list[coffee_index].explain} ref={ExplainInput}></input>
            </NewCoffee>
            <NewCoffee>
                <strong>추천가게</strong>
                <input type="text" placeholder={coffee_list[coffee_index]&&coffee_list[coffee_index].recommend} ref={RecommendInput}></input>
            </NewCoffee>
            <CreateBtn onClick={updateBtn}>수정완료</CreateBtn>
        </>
    )
}
const NewCoffee = styled.div`
    max-width: 80vw;
    height: 100px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
    margin: 20px 0;

    input {
        display: block;
        margin-top: 10px;
        height: 30px;
        width: 90%;
        border: 1px solid #c4c4c4;
        padding-left: 10px;
    }

    input:focus {
        outline: 1px solid #B97D60;
    }
`;

const CreateBtn = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    margin: 0 auto;
    border: none;
    background-color: #A45C40;
    border-radius:50px;
    cursor:pointer;
    color: #F9F1F0;
    font-weight: 600;

`;
export default UpdateNew;