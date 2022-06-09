import styled from "styled-components";
const Container = styled.div`
padding-top: 50px;
  width: 50%;
  margin: 0 auto;
  .form{
    display: flex;
    gap: 10px;
    width: fit-content;
    margin: auto;
    >input{
      width: 100px;
      padding: 0 5px;
    }
    button{
      height: fit-content;
    }
  }
`;
const MatritsaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Matritsa = styled.div`
  margin: 0 0px;
  width: fit-content;
  border-left: 2px solid black;
  border-right: 2px solid black;
  border-radius: 6px;
  overflow: auto;
  padding: 2px 6px;

`;
const Equal = styled.p`
  width: 50px;
  display: flex;
  justify-content: center;
  button{
    width: 50%;
  }
`;
const Result = styled.div`
  width: 100px;
  input{
    width: 100%;
    padding: 0 3px;
  }
`;

const TableS = styled.table`
  border-collapse: collapse;
  width: fit-content;
`;

const Cell = styled.input`
  border: none;
  width: 30px;
  text-align: center;
`;

export { Container,MatritsaWrapper, Equal, Result, Matritsa, Cell, TableS };
