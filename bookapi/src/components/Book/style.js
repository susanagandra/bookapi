import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 20px;
  padding: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
  font-family: "Montserrat" ;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Year = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-family: "Arial", sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  
  strong {
    font-weight: bold;
  }
`;

export const BookCover = styled.img`
  width: 200px;
  height: 70%;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: #fff;
  font-family: "Arial", sans-serif;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;