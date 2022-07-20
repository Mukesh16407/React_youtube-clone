import React from "react";
import styled from "styled-components";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Comments } from "../components/Comments";
import { Comment } from "../components/Comment";
import { Card } from "../components/Card";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Channel = styled.div`
  display: flex;
  justify-content: center;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color :${({theme})=>theme.textSoft};
font-size: 12px;
`;

const ChannelDescription = styled.p`
font-size: 14px;
`;

const Subscribe = styled.button`
background-color:red;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;



`;
const Recommendation = styled.div`
  flex: 2;
`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="React Video Sharing App UI Design | Youtube UI Clone with React"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              DisLike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <FavoriteBorderOutlinedIcon />
              Thanks
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj"/>
            <ChannelDetail>
              <ChannelName>Mukesh</ChannelName>
              <ChannelCounter>230</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate ea, optio repudiandae tempora ipsa
                necessitatibus sit ut aspernatur quod voluptatum cumque
                distinctio fugit vero dolorum, blanditiis aperiam, libero alias.
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
        <Comment/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};
