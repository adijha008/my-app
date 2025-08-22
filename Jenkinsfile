pipeline {
  agent any

  stage('Clean Workspace') {
  steps {
    deleteDir() // This wipes the entire workspace before continuing
  }
}

  stages {
    stage('Checkout') {
      steps {
        checkout scm
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
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "Add your test commands here"'
      }
    }
  }

  post {
    always {
      echo "Pipeline finished"
    }
  }
}
