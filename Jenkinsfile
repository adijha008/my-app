pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Clean Build Folders') {
      steps {
        // Clean only the relevant build folders, NOT the .git directory
        sh 'rm -rf client/build server/build || true'
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -t myapp-frontend ./client'
        sh 'docker build -t myapp-backend ./server'
      }
    }

    stage('Run Containers') {
      steps {
       sh 'docker compose down || true'
       sh 'docker compose up -d --build'

      }
    }

    stage('Test') {
      steps {
        sh 'echo "✅ Tests go here"'
      }
    }
  }

  post {
    always {
      echo "✅ Pipeline completed"
    }
  }
}
