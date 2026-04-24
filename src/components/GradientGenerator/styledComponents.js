// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  height: 100vh;
`

export const MainHeading = styled.h1`
  font-family: "Roboto";
  font-size: 35px;
  color: #ffffff;
  font-weight: bold;
  margin: 20px;
`
export const Title = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`
export const SubTitle = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`

export const ColorPeakerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`

export const ColorPeakerInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const ColorValue = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  margin-right : 30px;
`
export const CustomColorInput = styled.input`
  height: 50px;
  width: 90px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  margin-right : 30px;
`
export const GenerateButton = styled.button`
  height : 70px;
  width : 110px;
  color : #ffffff;
  font-family : "Roboto";
  font-size : 12px;
  font-weight : bold;
  background-color : #00c9b7;
  background-size : cover;
  border-radius : 5px;
  border : none;
  text-align : center;
  margin : 15px;
  outline : none;
  cursor : pointer;
`
