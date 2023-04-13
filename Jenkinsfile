pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Thaissfv/M17'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Rodar Testes') {
            steps {
                bat 'npm test'
            }
        }
        
    }
}