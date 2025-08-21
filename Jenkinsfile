pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/adijha008/my-app.git', branch: 'main'
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -t myapp-frontend ./frontend'
        sh 'docker build -t myapp-backend ./backend'
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
