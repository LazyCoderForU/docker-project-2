pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from the repository
                git 'https://your-repository-url.git'
            }
        }

        stage('Build') {
            steps {
                // Build the Docker images for the services
                sh 'docker-compose build'
            }
        }

        stage('Run') {
            steps {
                // Start the services
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            // Clean up Docker containers after the pipeline
            sh 'docker-compose down'
        }
    }
}