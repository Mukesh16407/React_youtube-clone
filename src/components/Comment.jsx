import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme})=>theme.text};
`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;

`;
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color:${({theme})=>theme.textSoft};
margin-left: 5px;
`;
const Text = styled.span`
font-size: 14px;
`;

export const Comment = () => {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj" />
      <Details>
        <Name>
          john Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          temporibus ratione, minima, dolorum tenetur atque optio officiis esse
          reiciendis ea laudantium. Aut dolorem temporibus totam eius provident
          alias doloremque cum.
        </Text>
      </Details>
    </Container>
  );
};
