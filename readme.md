## Documentação do Proxy - Motivação, Repositório do Front-end e Instruções

Este documento fornece informações sobre a motivação por trás do uso do proxy, o link para o repositório do front-end e instruções sobre como instalar dependências e rodar o projeto.

### Motivação

A motivação para a criação do proxy neste projeto é resolver um problema comum de Cross-Origin Resource Sharing (CORS). Quando a API que precisamos consumir não possui a devida configuração de CORS, o navegador bloqueia as solicitações de origens diferentes. Para superar esse problema, foi implementado um proxy que atua como intermediário, permitindo que o front-end faça solicitações para o proxy (que está na mesma origem) e, em seguida, o proxy faz as solicitações à API remota.

O proxy também foi utilizado para realizar correções específicas nos dados da API remota, garantindo que as respostas sejam formatadas corretamente antes de serem entregues ao front-end.

## Relatório de Problema e Solução - Objeto com Falta de Vírgula

Durante o desenvolvimento do projeto, identifiquei um problema em um objeto JSON que estava sendo consumido no front-end. O objeto em questão continha uma falta de vírgula antes da propriedade "cor", o que resultou em um formato JSON inválido e causou erros ao tentar analisar o dado no front-end.

### Problema Identificado

Aqui está um exemplo simplificado do objeto com o problema:

```json
{
    "id": 1,
    "timestamp_cadastro": 1696539488,
    "modelo_id": 12,
    "ano": 2015,
    "combustível": "FLEX",
    "num_portas": 4"cor": "BEGE",
    "nome_modelo": "ONIX PLUS",
    "valor": 50.000
}
```

Observe que a propriedade "cor" não possui uma vírgula antes dela. Isso torna o JSON inválido e causa erros na análise do dado no front-end.

### Solução Implementada

Para solucionar esse problema e garantir que o dado fosse consumido corretamente no front-end, realizei uma intervenção no proxy que estava fazendo a requisição à API. No proxy, identifiquei o problema e introduzi uma vírgula antes da propriedade "cor" para tornar o JSON válido.

Após essa correção no proxy, o dado passou a ser consumido corretamente no front-end, sem erros na análise do JSON.

### Repositório do Front-end

O repositório do front-end pode ser encontrado no GitHub, no seguinte link: [Repositório do Front-end](https://github.com/ThiagoDaSilveiraSouza/vehicleList).

Certifique-se de acessar o repositório do front-end para obter mais informações sobre o código, funcionalidades e instruções específicas relacionadas ao front-end da aplicação.

### Instrução de Instalação e Execução

A seguir, apresenta-se a instrução para instalar as dependências e executar o projeto do proxy:

#### Com npm

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [Node.js](https://nodejs.org/).

2. Clone o repositório do proxy em sua máquina:

```markdown
git clone https://github.com/ThiagoDaSilveiraSouza/vehicleListProxyServer.git
```

3. Navegue até a pasta do projeto:

```markdown
cd vehicleListProxyServer
```

4. Instale as dependências utilizando o npm :

```markdown
cd vehicleListProxyServer
```

5. Após a conclusão da instalação, você pode iniciar o servidor com o seguinte comando:

```markdown
npm run dev
```

#### Com yarn

Se você preferir utilizar o Yarn como gerenciador de pacotes, siga estas instruções:

1. Certifique-se de ter o Yarn instalado em seu sistema. Você pode baixá-lo em Yarn.

2. Clone o repositório do proxy em sua máquina (se ainda não o fez):

```markdown
git clone https://github.com/ThiagoDaSilveiraSouza/vehicleListProxyServer.git
```

3. Instale as dependências utilizando o Yarn:

```markdown
yarn install
```

4. Após a conclusão da instalação, você pode iniciar o servidor com o seguinte comando:

```markdown
yarn dev
```

O proxy estará em execução e pronto para receber solicitações do front-end.

Certifique-se de configurar corretamente as URLs de destino no proxy para que ele encaminhe as solicitações à API remota. Além disso, o front-end deve estar configurado para fazer solicitações ao proxy em vez da API remota diretamente. Com essas configurações, o proxy atuará como um intermediário eficaz e resolverá os problemas de CORS e formatação de dados, conforme descrito na documentação.

Espero que esta documentação seja útil para entender a motivação por trás do proxy, acessar o repositório do front-end e executar o projeto. Se houver alguma dúvida ou problema, não hesite em entrar em contato com a equipe de desenvolvimento.

### Conclusão

Identificar e resolver problemas de formatação de JSON é fundamental para garantir o correto funcionamento de um sistema. Neste caso, a intervenção no proxy permitiu que o dado fosse processado sem problemas no front-end, demonstrando a importância de uma abordagem proativa para solucionar problemas desse tipo.

Espero que este relatório ajude a entender e documentar a solução aplicada para o problema encontrado no projeto.
