pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // No need to deleteDir() before checkout
        checkout scm
      }
    }

    stage('Clean Workspace (Optional)') {
      steps {
        // If you want to clean build artifacts, do it selectively
        sh 'rm -rf client/build server/build'  // Adjust as needed
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
