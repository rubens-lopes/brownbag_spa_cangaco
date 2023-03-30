# _Brownbag_ SPA a moda do cangaço
Demonstração das técnicas e métodos discutidos durante o _brownbag_.

## Requisitos técnicos
- Dotnet Core 7 [baixar](https://dotnet.microsoft.com/en-us/download/dotnet/7.0);
- Nodejs 18 [baixar](https://nodejs.org/dist/latest-v18.x/);
- PNPM 7 [baixar](https://pnpm.io/installation#installing-a-specific-version);

## Rodando em modo de desenvolvimento

No terminal de sua preferência acesse a pasta `Demonstracao/Frontend`, restaure as dependências Nodejs com `pnpm install` e rode o _script_ `dev` através do comando `pnpm run dev`.

> Se você tem preferência por outro gerenciador de pacotes (`npm/yarn`) é preciso alterar o _script_ [`dev`](Demonstracao/Frontend/package.json) de `concurrently -c auto pnpm:dev:*` para `concurrently -c auto yarn:dev:*`, por exemplo.
