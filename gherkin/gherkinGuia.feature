Feature: Entrar e ver os guias do sistema

    Scenario: entrar na aba Guias

        Given que eu posso ter acesso a pagina guia
        When clico em Guia
        And tenho acesso a aba Guias
        Then após o sistema carregar, tenho acesso a todos os guias disponiveis na pagina