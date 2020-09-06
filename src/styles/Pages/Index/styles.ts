import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.main`
  width: 100%;
  height: 100%;

  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  form{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input{
      height: 56px;
      width: 300px;
      font-size: 18px;
      border-radius: 10px 0px 0px 10px;
    }

    button{
      height: 56px;
      width: 150px;
      border-radius: 0px 10px 10px 0px;

      background-color: #323232;
      color: #ffff;
      font-weight: 700;
      border:none;
      transition: background-color 0.3s;

      &:hover{
        cursor: pointer;
        background-color: #262626;
      }
    }
  }
`

export const PeopleContainer = styled.section`
  width: 100%;
  height: 40%; 
  
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

`

export const PersonContainer = styled.div`
  width: 220px;
  height:136px;
  background:#323232;
  border: 2px solid #5e5e5e;
  border-radius: 10px;
  padding: 8px;
  transition: opacity 0.3s;

  &:hover{
      opacity: 0.8;
    }
  
  a{
    text-decoration: none;
    color:${props => props.theme.colors.text};
  }

  ul{
    margin-top: 8px;
    list-style-type: none;
 
  }
  
`
