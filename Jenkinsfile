pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Print Git Status') {
      steps {
        sh 'git status'
      }
    }
  }

  post {
    always {
      echo "✅ Pipeline completed"
    }
  }
}
