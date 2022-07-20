import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
width:${(prop)=>prop.type==="sm"&& "360px"};
margin-bottom: ${(prop)=>prop.type==="sm"? "10px":"45px"};
cursor: pointer;
display: ${(prop)=>prop.type==="sm" && "flex"};

`
const Image = styled.img`
width: 100%;
height: ${(prop)=>prop.type==="sm"? "120px":"202px"};
gap:10px;
background-color: #999;
flex: 1;
`
const Details= styled.div`
display: flex;
margin-top:${(props)=>props.type !=="sm" && "16px"};
gap:12px;
flex: 1;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props)=>props.type==="sm" && "none"};
`

const Texts = styled.div`
`
const Title = styled.h1`
font-size: 16px;
font-weight:500;
color: ${({theme})=>theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin:9px 0px;
`
const Info = styled.div`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
`

export const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
     <Container type={type}>
        <Image type={type}/>
        <Details type={type}>
           <ChannelImage/>
           <Texts>
            <Title>Test video</Title>
            <ChannelName>General</ChannelName>
            <Info>660,908 views*1 day ago</Info>
           </Texts>
        </Details>
    </Container>
    </Link>
   
  )
}
