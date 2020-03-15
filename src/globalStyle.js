import {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
}
ul,li{
    style:none;
    list-style-type:none;
}
a{
    text-decoration:none;
}
button{
    border: none;
    outline: none;
    background-color: transparent;
    
}
input{
    border:none;
    outline:none;
}
textarea{
    border:none;
    outline:none;
}


`;