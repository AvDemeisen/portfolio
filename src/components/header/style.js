import styled from 'styled-components'

export const PageHeader = styled.header`
 z-index: 99;
`

export const PageHeaderInner = styled.div`
    position: relative;
    color: #fff;
    background: #090a0b no-repeat 50%;
    background-size: cover;
    padding: 0 5vw 5vw;
`

export const PageHeaderContent = styled.div`
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vw 3vw 6vw;
    min-height: 200px;
    max-height: 340px;
`