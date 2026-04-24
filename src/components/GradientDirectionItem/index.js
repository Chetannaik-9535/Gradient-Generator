// Write your code here

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onClickGradientDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirectionButton = () => {
    onClickGradientDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickDirectionButton}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
