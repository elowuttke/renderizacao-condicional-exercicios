import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled"

function TelaCadastroEndereco(props) {
    
    return(
        <FormContainer>
            <h1>Cadastrar endereço</h1>
            <Form>
                <StyledLabel>
                    Endereço:
                    <Input id="endereco"/>
                </StyledLabel>
                <StyledLabel>
                    Número:
                    <Input id="numero"/>
                </StyledLabel>
                <StyledLabel>
                    Telefone:
                    <Input id="telefone"/>
                </StyledLabel>
                <StyledLabel>
                    Complemento:
                    <Input id="complemento"/>
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Concluir cadastro</SendButton>
            </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco