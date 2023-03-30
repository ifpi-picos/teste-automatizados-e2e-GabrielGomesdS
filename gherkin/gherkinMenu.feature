Feature: Entrar e usurfluir do menu

    Scenario: Usar o menu 

        Given que eu posso ter acesso ao menu
        When clico em ir para o menu
        And clico em ir para busca
        Then após o sistema carregar, não tenho acesso a nenhuma das paginas