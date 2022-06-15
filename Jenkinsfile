pipeline {
    agent any
    
    stages {
        stage('git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Ajith87907/chotastore.git']]])
                
            }
        }
        stage('docker-compose') {
            steps {
                bat """
                docker-compose up -d
                """
            }
        }
    }
}
