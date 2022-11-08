// Write your code here

import {useState} from 'react'
import {
  MainContainer,
  CardImage,
  CardHeading,
  CardParagraph,
  CardParagraph1,
  CardButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isShow, setShow] = useState(true)
  const buttonText = isShow ? 'Read More' : 'Read Less'
  const Length = Math.ceil(reactHooksDescription.length / 2)
  const paragraph = reactHooksDescription.slice(0, Length - 22)
  const paragraphText = isShow ? paragraph : reactHooksDescription
  console.log(paragraphText)
  console.log(Length)

  const onChangeText = () => {
    setShow(prevSetShow => !prevSetShow)
  }

  return (
    <MainContainer>
      <CardHeading>React Hooks</CardHeading>
      <CardParagraph>Hooks are a new addition to React</CardParagraph>
      <CardImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      <CardParagraph1>{paragraphText}</CardParagraph1>
      <CardButton type="button" onClick={onChangeText}>
        {buttonText}
      </CardButton>
    </MainContainer>
  )
}
export default ReadMore
