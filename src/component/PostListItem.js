import React from 'react'
import styled from 'styled-components'
import hoverCss from './hoverCss'

const Wrapper = styled.article`
  margin-bottom: 1rem;
  text-align: center;
  padding: 1rem;
  ${hoverCss}
`

const Meta = styled.div`
  font-size: 0.75rem;
  color: var(--subtitle-color);
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
  color: var(--title-color);
`

const Description = styled.div`
  color: var(--subtitle-color);
  font-size: 0.8rem;
  line-height: 1.2rem;
  word-break: keep-all;
`

const maxLength = 100;

const PostListItem = ({ title, date, description }) => (
  <Wrapper>
    <Meta>{date}</Meta>
    <Title>{title}</Title>
    {
      description &&
      <Description>
        {description.slice(0, maxLength)}
        {description.length > maxLength && '...'}
      </Description>
    }
  </Wrapper>
)

export default PostListItem
