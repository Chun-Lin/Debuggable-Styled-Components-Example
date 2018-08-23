import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  width: 80%;
  height: 300px;
  box-shadow: 0 0 5px 2px #ccc;
`

const Img = styled.div`
  display: inline-block;
  width: 300px;
  height: 100%;
  background-image: url('https://picsum.photos/300/300?image=1062');
`

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 300px);
  height: 100%;
  text-align: left;
`

const Title = styled.div`
  padding: 20px 0 0 20px;
  font-size: 48px;
  color: ${props => (props.skyblue ? 'skyblue' : 'black')};
`

const Description = styled.div`
  padding: 20px;
  font-size: 30px;
  font-style: italic;
  color: #888888;
`

export default ({ skyblue }) => {
  return (
    <ContentWrapper>
      <Img />
      <InfoWrapper>
        <Title skyblue>Cute Puppy</Title>
        <Description>
          Sed ut voluptatem neque cumque. Qui sed ut itaque est doloribus qui.
          Eos perferendis autem qui fugiat.
        </Description>
      </InfoWrapper>
    </ContentWrapper>
  )
}
