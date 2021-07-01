import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const DictionaryList = (props) => {
    
    const coffee_list = useSelector(state => state.coffee.list);

    return (
        <Fragment>
            {coffee_list.map((list, idx) => {
                const {word,explain,recommend } = list
                return (
                    <DicList
                    key={idx}
                    onClick={()=> {
                        props.history.push("/detail/"+idx)
                    }}>
                        <Strong>종류</Strong>
                        <p>{word}</p>
                        <Strong>설명</Strong>
                        <p>{explain}</p>
                        <Strong>추천가게</Strong>
                        <p style={{color: "#A45C40",fontWeight:"600"}}>{recommend}</p>
                    </DicList>
                )
            })}
        </Fragment>
    )
};

const Strong = styled.strong`
    font-weight: 700;
    font-size: 1.5rem;
`;

const DicList = styled.div`
    max-width: 80vw;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    cursor: pointer;
    &: hover{
        background-color: #F9F1F0;
    }
`;

export default DictionaryList;