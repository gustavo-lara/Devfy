import styles from "./Sobre.module.css"

export const Sobre = () => {
    return (
      <div className={styles.div}>
        <p>O Vite é uma ferramenta de construção e servidor de desenvolvimento para aplicativos da web modernos. Ele foi criado para fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos modernos da web. O Vite é uma ferramenta de construção opinativa que vem com padrões sensatos fora da caixa. Ele suporta vários frameworks, como React, Vue, Svelte e outros. O Vite é executado em cima do nativo ES modules, o que significa que ele não precisa fazer a transpilação do código para um formato diferente. Isso torna o processo de construção muito mais rápido do que outras ferramentas de construção como o Webpack.

Para começar a usar o Vite com o React, você pode seguir os seguintes passos:

Instale o pacote vite usando o comando npm install vite --save-dev.
Crie um novo projeto React usando o comando npx create-react-app my-app.
Navegue até a pasta do projeto e execute o comando npm start para iniciar o servidor de desenvolvimento.
Abra seu navegador e navegue até http://localhost:3000 para ver seu aplicativo em execução.
O Vite também oferece suporte a outras ferramentas e recursos, como HMR (Hot Module Replacement), que permite atualizar automaticamente as alterações no código sem precisar recarregar a página, bem como plugins personalizados que podem ser usados para estender a funcionalidade do Vite.</p>
      </div>
    )
  }
  
  export default Sobre