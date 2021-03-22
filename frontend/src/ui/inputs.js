import styled from 'styled-components'

export const FormInput = styled.input`
    margin-bottom: 22px;
    align-self: center;
    font-size: 16px;
    border: ${props => props.error ? '1px solid red' : '1px solid #333333'};
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    outline: none;
`

export const OtherTextArea = styled.textarea`
    display: ${props => props.other ? 'block' : 'none'};
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 1px solid #333333;
    font-size: 16px;
    border-radius: 5px;
    outline: none;
    resize: none;
    max-width: 500px;
    height: 100px;
`

export const Input = styled.input`
    margin-bottom: 20px;
    font-size: 16px;
    cursor: pointer;
`

export const Label = styled.label`
    cursor: pointer;
`
