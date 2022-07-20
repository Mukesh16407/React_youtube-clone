import React from 'react'
import styled from 'styled-components'



const Container = styled.div``

const NewComment = styled.div`
display: flex;
align-items: center;
gap:10px
`;

const Avatar = styled.img`
 height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
border:none;
border-bottom:1px solid ${({theme})=>theme.soft} ;
background-color:transparent;
outline: none;
padding:5px ;
width: 100%;
`;

export const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
    </Container>
  )
}
