pipeline {
  agent any

  options {
    // Only necessary if you’ve disabled implicit checkout before
    skipDefaultCheckout(false)
  }

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
        sh 'git status' // Should work now
      }
    }
  }

  post {
    always {
      echo "✅ Pipeline completed"
    }
  }
}
