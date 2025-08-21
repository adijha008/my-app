pipeline {
  agent any

    stage('Build Docker Images') {
      steps {
        script {
          docker.build('myapp-frontend', './frontend')
          docker.build('myapp-backend', './backend')
        }
      }
    }

    stage('Run Containers') {
      steps {
        // Stop any running containers
        sh 'docker-compose down || true'
        // Build and start containers
        sh 'docker-compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        echo "Add your test commands here"
      }
    }
  }

  post {
    always {
      echo "Pipeline finished"
    }
  }
}
