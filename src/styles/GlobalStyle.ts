import {createGlobalStyle} from 'styled-components'


export const GlobalStyle=createGlobalStyle ` 
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --white:#FFFFF2;

  --gray-100:#e6dfd8;
  --gray-300:#a8a8b3;
  --gray-800:#29292e;
  --gray-900:#121214;
  --buttonNow:#25A18E;
  --buttonCredit:#00A5CF ;
  --buttonWathsapp:#807182;
  --cyan-500:#61dafb;
  --yellow-500:#eba417;
}
@media(max-width:1080px){
  html{
    font-size:93.75%;
  }
}
@media(max-width:720px){
  html{
    font-size:87.5%;
  }
}

body{
  background:var(--gray-100);
  color: var(--white);
}

body,input,textarea,select,button {

  font:400 1rem "Roboto", sans-serif;
}
button{
  cursor:pointer;
  color: var(--white);
}

`
export default GlobalStyle