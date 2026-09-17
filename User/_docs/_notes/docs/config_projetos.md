
### Projetos
- comece um projeto com profile >> a partir da pasta que esta o .vscode/settings.json

### Perfis_Profiles
- Nao_Renomeie_Pastas_de_Perfis_no_Codium_Arquivos: Explicacao [by Gmn >> ](https://g.co/gemini/share/06f88df4367a)
- Melhor usar o settings do proprio profile custom em questao, assim fica em polo unico as configuracoes
  - Obs: só que neste settings tem que copiar as configs do default que for usar, mas mesmo assim compensa, melhor que fazer um settings para cada projeto.
  - recomendacoes de extensoes e outras configs settings inserir no arquivo workspace do projeto.

### Extensoes

Configs
- Identificacao:
  - informada no campo `Identifier` da extensao
	- Encontrar_na_Web_Marketplace_Visual_Studio:
    - https://marketplace.visualstudio.com/items?itemName=<NOME_DO_IDENTIFIER>

By_Geral_Profiles
- by_Auto_Complete:  intelliCode , [info ](https://g.co/gemini/share/82f8d4601901)
- Caminhos_Exportacao: Path Intellisense
- Mostra_Erro_na_Linha: Error Lens
- 


By/Deualt

---

By Default profile
extensoes

- RestCliente: identfier: humao.rest-client (Arquivo rest, dispensa o clientes webs para debugar rest.)

---

### Projetos

- Abra cada projeto pelo workspace da linguagem inserido no projeto, que contém as configs da linguagem. é use o profile da linguagem para aproveitar o que vem do profile default e as extensões instaladas para a linguagem em questão.

Identador:

- conceito: use o deno fmt ao invés do prettier
- EditorConfig: [Ainda é Importante :: link by gmn >>](https://g.co/gemini/share/8376a72d4cdb)

- Opcoes
  - Sefor_Usar_Codium_NoSettings: "esbenp.prettier-vscode" (requer instalar a extensao: `ext install codeium.codeium-formatter`)
  - Sefor_Usar_VsCode_NoSettings: ""
  - Sefor_Usar_Prettier_NoSettings: "esbenp.prettier-vscode"
  - Sefor_Usar_Deno_NoSettings: ""
  - Sefor_Usar_PadraoParaTypescript_NoSettings: "vscode.typescript-language-features" (cobre ts, json, )

Linter

- use o deno linter, ao invés do eslint
- Tutoriais: [Link :](https://g.co/gemini/share/964c70079921)

Corretor Ortográfico

- Spell
  - Tutoriais : [Link :](https://g.co/gemini/share/3ab68274672f)
- ***

---
### Workspaces

Conceito 
- 1. **Configurações Específicas por Workspace:**
    
    - Lembre-se que cada `.code-workspace` pode ter sua própria seção `"settings": {}`. Isso é poderoso!
    - **Extensões:** Você pode recomendar extensões para o workspace (VS Code pergunta para instalar).
    - **Linting/Formatação:** Configurações de linter (ESLint, Prettier, Ktlint, GolangCI-Lint) podem ser específicas para aquele workspace, garantindo que o estilo de código seja consistente com o projeto.
    - **Tarefas (Tasks):** Crie tarefas específicas para o build, teste ou deploy daquele projeto.
    - **Depuração (Launch Configurations):** Configurações de depuração podem ser salvas no `launch.json` do workspace.

---
