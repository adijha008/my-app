pipeline {
  agent any

  stages {
    // Remove or fix this Checkout stage to use your GitHub repo URL
    stage('Checkout') {
      steps {
        git url: 'https://github.com/adijha008/my-app.git', branch: 'main'
      }
    }

    stage('Build Docker Images') {
      steps {
        bat 'docker build -t myapp-frontend ./frontend'
        bat 'docker build -t myapp-backend ./backend'
      }
    }

    stage('Run Containers') {
      steps {
        bat 'docker-compose down || exit 0'
        bat 'docker-compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        bat 'echo Add your test commands here'
      }
    }
  }

  post {
    always {
      echo "Pipeline finished"
    }
  }
}
