import React, {useRef} from 'react';
import styled from 'styled-components';

import {useDispatch} from 'react-redux';
import { addCoffeeFB } from './redux/modules/coffee';


const ListCreate = (props) => {
    const dispatch = useDispatch();

    const wordInput = useRef();
    const explainInput = useRef();
    const recommendInput = useRef();
    const addNewCoffee = () => {
        const new_word = wordInput.current.value;
        const new_explain = explainInput.current.value;
        const new_recommend = recommendInput.current.value;
        if(new_word && new_explain && new_recommend){
            dispatch(addCoffeeFB(new_word,new_explain,new_recommend));
            props.history.goBack();
        } else {
            alert("모두 작성하고 작성완료를 눌러주세요!")
        }
    }

    return (
        <>
            <NewCoffee>
                <strong>종류</strong>
                <input type="text" placeholder="종류를 작성해주세요." ref={wordInput}></input>
            </NewCoffee>
            <NewCoffee>
                <strong>설명</strong>
                <input type="text" placeholder="설명을 작성해주세요." ref={explainInput}></input>
            </NewCoffee>
            <NewCoffee>
                <strong>추천가게</strong>
                <input type="text" placeholder="추천하는 가게를 작성해주세요." ref={recommendInput}></input>
            </NewCoffee>
            <CreateBtn onClick={addNewCoffee}>작성완료</CreateBtn>
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

export default ListCreate;