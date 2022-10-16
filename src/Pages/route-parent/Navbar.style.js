import style from "styled-components";

export const Wrapper = style.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    border-bottom:1px solid #c4c4c4;
   &>div{
       display:flex;
       align-items:baseline;
       column-gap:10px;
       &:last-child{
           column-gap:20px;
       }
   }
`;

export const Button = style.button`
    cursor:pointer;
    border:none;
    border-radius:20px;
    padding:10px 20px;
`;
export const Heading = style.span`

font-weight: 700;
font-size: 38px;
line-height: 46px;

color: #000000;

`;
export const DateSpan = style.span`

font-weight: 300;
font-size: 16px;
line-height: 19px;

color: #000000;


`;
