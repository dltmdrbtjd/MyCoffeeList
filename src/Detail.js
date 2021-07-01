import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteCoffeeFB } from './redux/modules/coffee';

import styled from 'styled-components';

const Detail =  (props) => {
    const dispatch = useDispatch();

    const coffee_list = useSelector((state) => state.coffee.list);
    let coffee_index = parseInt(props.match.params.index);

    return (
        <>
            <Strong>종류</Strong>
            <p>{coffee_list[coffee_index] && coffee_list[coffee_index].word}</p>
            <Strong>설명</Strong>
            <p>{coffee_list[coffee_index] && coffee_list[coffee_index].explain}</p>
            <Strong>추천가게</Strong>
            <p style={{color: "#A45C40",fontWeight:"600"}}>{coffee_list[coffee_index] && coffee_list[coffee_index].recommend}</p>
            <ButtonWrap>
                <DelButton onClick={()=> {
                    dispatch(deleteCoffeeFB(coffee_index));
                    props.history.goBack();
                }}>삭제하기</DelButton>
                <DelButton onClick={()=> {
                    props.history.push("/update/"+coffee_index)
                }}>수정하기</DelButton>
            </ButtonWrap>
        </>
    )
}

const Strong = styled.strong`
    font-weight: 700;
    font-size: 1.5rem;
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;


const DelButton = styled.button`
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

export default Detail;