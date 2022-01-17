import Styled from 'styled-components';

export default function FormBox(){
  return (
    <FormSet method="POST" action="#">
      <Field>
        <Legend>폼 작성</Legend>
      </Field>
    </FormSet>
  )
}

const FormSet = Styled.form`
  width:90%; height:auto; min-height:500px; padding:1rem; margin:10rem auto; border:1px solid #333;
`

const Field = Styled.fieldset`
  width:100%; height:auto; min-height:500px; background-color:#fff;
`

const Legend = Styled.legend`
  width:1px; height:1px; position:absoulte; clip:rect(0,0,0,0); overflow:hidden; z-index:-1;
`