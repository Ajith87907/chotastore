pipeline {
    agent any
    
    stages {
        stage('git') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Ajith87907/chotastore.git']]])
                
            }
        }
        stage('docker-compose build') {
            steps {
                bat """
                docker-compose build
                """
            }
        }
         stage('docker-compose up') {
            steps {
                bat """
                docker-compose up -d
                """
            }
        }
    }
     post {
        always {
            bat 'for /F %i in ('docker images -a -q') do docker rmi -f %i'
        }
     }
}
