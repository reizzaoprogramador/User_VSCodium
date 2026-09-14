
---
### FORMATADORES DE CODIGO

---
### Nativamente pelo Vscodium
- Para_Formatar_Qualquer_Linguagem: `"editor.defaultFormatter": "vscode.<LINGUAGEM>-language-features"`
- Para_Formatar_Json: `"editor.defaultFormatter": "vscode.json-language-features"`

---

### Prettier
O Prettier, por si só, tem suporte nativo para JavaScript, TypeScript, JSX, TSX, JSON, CSS, SCSS, Less, HTML, Vue, Angular, GraphQL, Markdown, YAML e alguns outros.

Para linguagens que o Prettier não suporta nativamente (como Kotlin, Go, Python, etc.), você geralmente precisará de:

Outra extensão de formatador: Para Python, por exemplo, você pode usar Black Formatter ou autopep8.

Plugins do Prettier: Para algumas linguagens e frameworks, existem plugins que estendem o Prettier para suportá-los (ex: prettier-plugin-tailwindcss para Tailwind CSS, prettier-plugin-java, etc.). Você os instala via npm ou yarn no seu projeto e os lista na opção plugins do seu .prettierrc.json.

Para personalizar o Prettier, você precisa instalar a extensão oficial e configurar suas opções.
Instale a extensão (publicado por esbenp).

Passo 2: Definir o Prettier como formatador padrão

É crucial dizer ao VSCodium para usar o Prettier para formatar seus arquivos. No seu settings.json (você pode colocar isso no seu perfil padrão ou em perfis específicos, dependendo se quer que se aplique a tudo ou apenas a certos contextos):

JSON

{
  // ... outras configurações ...

  // Define o Prettier como o formatador padrão para todos os idiomas
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Opcional: Ativa a formatação ao salvar (você já tem isso, mas é bom reforçar)
  "editor.formatOnSave": true,

  // Configurações específicas para linguagens (se quiser usar outro formatador para alguma delas)
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
Passo 3: Configurar as Opções do Prettier

O Prettier pode ser configurado de duas maneiras principais:

A. Diretamente no settings.json do VSCodium (menos recomendado para projetos):
Você pode adicionar as configurações do Prettier diretamente no seu settings.json do VSCodium (seja no seu perfil padrão ou em um perfil específico).

JSON

{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  // Configurações do Prettier aqui, todas começando com "prettier."
  "prettier.singleQuote": true, // Usar aspas simples
  "prettier.semi": false, // Não usar ponto e vírgula no final das declarações
  "prettier.tabWidth": 2, // 2 espaços para indentação (você já tem editor.tabSize: 2)
  "prettier.printWidth": 80, // Largura máxima da linha (aqui é importante para sua quebra de linha de arrays!)
  "prettier.trailingComma": "all", // Vírgulas pendentes (trailing commas) sempre
  "prettier.bracketSpacing": true, // Espaços entre chaves de objetos
  "prettier.arrowParens": "always" // Parênteses em arrow functions sempre
  // ... e muitas outras opções
}
B. Usando um arquivo de configuração do Prettier no seu projeto (MUITO RECOMENDADO):
Esta é a melhor prática, pois garante que todos que trabalham no projeto (ou você mesmo em máquinas diferentes) usem as mesmas regras de formatação. O VSCodium (com a extensão Prettier) irá automaticamente detectar este arquivo e usar suas configurações.

Crie um arquivo na raiz do seu projeto (ou na subpasta onde o código que você quer formatar está) com um dos seguintes nomes:

.prettierrc

.prettierrc.json

.prettierrc.js

.prettierrc.cjs

.prettierrc.mjs

.prettierrc.yaml

.prettierrc.yml

prettier.config.js

prettier.config.cjs

prettier.config.mjs

package.json (adicionando uma chave "prettier")

Exemplo de .prettierrc.json (recomendado):

JSON

{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "printWidth": 120, // AQUI É ONDE VOCÊ CONTROLA A QUEBRA DE LINHA!
  "trailingComma": "all",
  "bracketSpacing": true,
  "arrowParens": "always",
  "plugins": [
    // Se você usa Tailwind CSS, por exemplo:
    // "prettier-plugin-tailwindcss"
  ]
}
Como controlar a quebra de linha de arrays (sua preocupação):
A chave para controlar a quebra de linha é a opção printWidth.

"printWidth": 80 (Padrão): O Prettier tentará quebrar linhas após 80 caracteres. Se seu array for longo, ele será quebrado em várias linhas.

"printWidth": 120 ou mais: Aumentar esse valor fará com que o Prettier tente manter mais código em uma única linha, incluindo arrays. Experimente um valor maior como 100, 120 ou até 140 para ver como fica.

"arrayBracketSpacing": true/false: Esta opção controla se há um espaço entre os colchetes e o conteúdo do array ([ 1, 2, 3 ] vs [1, 2, 3]). Não está diretamente relacionada à quebra de linha, mas é uma configuração de arrays.

---
