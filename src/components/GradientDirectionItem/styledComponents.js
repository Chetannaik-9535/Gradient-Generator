// Style your elements here

import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const DirectionButton = styled.button`
  height: 40px;
  width: 70px;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  background-color: #ffffff;
  background-size: cover;
  border-radius: 5px;
  border: none;
  text-align: center;
  margin: 15px;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`
