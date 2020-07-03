import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    color:white;
    margin: .5rem;
    padding: 1rem;
    background-color:hotpink;
    font-size: 3rem;
    border:1px;
    width:5rem;
    box-shadow: 0 0 10px rgba(0,0,0, 0.3);
    transition: .2s;
    outline:none;
    &:hover{

        transform: translateY(-2px) scale(1.1)
    }
    &:active{
        transform: scale(1)
    }
`

export const Square = ({value, onClick}) => {
    return(
        <Button onClick={onClick}>
            {value}
        </Button>
    )
}