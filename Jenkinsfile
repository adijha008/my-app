pipeline {
  agent any

  stage('Checkout') {
    steps {
        checkout scm
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
