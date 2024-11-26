pipeline {
    agent any
    tools { 
        nodejs "node 20.18.0"
    }
    stages {
        stage('Clonar Repositório') {
            steps {
                git 'https://github.com/seu-usuario/microservico.git'
            }
        }
        stage('Instalar Dependências') {
            steps {
                sh 'npm install'
            }
        }
        stage('Configurar Prisma') {
            steps {
                sh 'npx prisma generate'
            }
        }
        stage('Buildar Imagem Docker') {
            steps {
                sh 'docker build -t microservico .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop microservico || true'
                sh 'docker rm microservico || true'
                sh 'docker run -d -p 3001:3001 --name microservico microservico'
            }
        }
    }
    post {
        success {
            echo 'Deploy do Microserviço realizado com sucesso!'
        }
        failure {
            echo 'O deploy do Microserviço falhou!'
        }
    }
}
