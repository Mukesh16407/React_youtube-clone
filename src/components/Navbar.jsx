import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Container = styled.div`
position: static;
top:0;
background-color:${({theme})=>theme.bgLighter};
height: 56px;
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
height:100%;
padding:0px 20px;
justify-content:flex-end ;
position: relative;`

const Search = styled.div`
width:40%;
position:absolute;
left:0px;
right:0px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
padding: 5px;
border:1px solid #ccc;
border-radius: 3px;
`

const Input = styled.input`
border: none;
background-color: transparent;
`;

const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;

cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='search...'/>
           <SearchOutlinedIcon/>
        </Search>
        <Button>
          <AccountCircleOutlined/>
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}

