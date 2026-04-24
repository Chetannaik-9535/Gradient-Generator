// Write your code here

import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  MainHeading,
  Title,
  SubTitle,
  GradientDirectionList,
  ColorPeakerContainer,
  ColorPeakerInputAndColorContainer,
  ColorValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickGradientDirection = direction => {
    this.setState({
      activeGradientDirection: direction,
    })
  }

  onChangeFirstColor = event => {
    this.setState({
      firstColor: event.target.value,
    })
  }

  onChangeSecondColor = event => {
    this.setState({
      secondColor: event.target.value,
    })
  }

  onClickGenerateButton = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {activeGradientDirection, firstColor, secondColor, gradientValue} =
      this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Title>Choose Direction</Title>
        <GradientDirectionList>
          {gradientDirectionsList.map(eachOption => (
            <GradientDirectionItem
              key={eachOption.directionId}
              directionDetails={eachOption}
              onClickGradientDirection={this.onClickGradientDirection}
              isActive={activeGradientDirection === eachOption.value}
            />
          ))}
        </GradientDirectionList>
        <SubTitle>Pick the Colors</SubTitle>
        <ColorPeakerContainer>
          <ColorPeakerInputAndColorContainer>
            <ColorValue>{firstColor}</ColorValue>
            <CustomColorInput
              onChange={this.onChangeFirstColor}
              value={firstColor}
              type="color"
            />
          </ColorPeakerInputAndColorContainer>

          <ColorPeakerInputAndColorContainer>
            <ColorValue>{secondColor}</ColorValue>
            <CustomColorInput
              onChange={this.onChangeSecondColor}
              value={secondColor}
              type="color"
            />
          </ColorPeakerInputAndColorContainer>
        </ColorPeakerContainer>

        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
