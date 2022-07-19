import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import YouTube from '../img/you-tube-logo.png';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
flex: 1;
background-color:${({theme})=>theme.bgLighter};
height: 100vh;
color:${({theme})=>theme.text} ;
position: sticky;
top:0;
`
const Wrapper = styled.div`
padding: 18px 26px;

`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`
const Img = styled.img`
height: 25px;
`
const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
padding: 3.5px 0px;
cursor: pointer;
`
const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme})=>theme.soft};
`;
const Login = styled.div``;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`
const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`
export const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={YouTube}/>
                YouTube
            </Logo>
            <Item><HomeIcon/>Home</Item>
            <Item><ExploreOutlinedIcon/> Explore</Item>
            <Item><SubscriptionsOutlinedIcon/>Subscription</Item>
            <Hr/>
            <Item><VideoLibraryOutlinedIcon/>Library</Item>
            <Item><HistoryOutlinedIcon/> History</Item>
            <Hr/>
            <Login>
              sign in to like video,comment,and subscribe
            <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
            </Login>
            <Hr/>
            <Title>BEST OF YOUTUBE</Title>
            <Item><LibraryMusicOutlinedIcon/>Music</Item>
            <Item><SportsBasketballOutlinedIcon/>Sports</Item>
            <Item><SportsEsportsOutlinedIcon/>Gaming</Item>
            <Item><ArticleOutlinedIcon/>News</Item>
            <Item><LiveTvOutlinedIcon/>Live</Item>
            <Hr/>
            <Item><SettingsOutlinedIcon/>setting</Item>
            <Item><FlagOutlinedIcon/>Report</Item>
            <Item><HelpOutlineOutlinedIcon/>Help</Item>
            <Item onClick={()=>setDarkMode(!darkMode)} 
            ><LightModeOutlinedIcon/>Light Mode</Item>
           
        </Wrapper>
    </Container>
  )
}
