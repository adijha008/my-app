]pipeline {
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
        sh 'docker-compose down || true'
        sh 'docker-compose up -d --build'
      }
    }

    stage('Test') {
      steps {
        // Find the container ID for the backend service and run tests inside it
        sh '''
          CONTAINER_ID=$(docker ps -qf "name=backend" | head -n 1)
          if [ -z "$CONTAINER_ID" ]; then
            echo "❌ Backend container not running!"
            exit 1
          fi
          echo "✅ Running tests inside container: $CONTAINER_ID"
          docker exec "$CONTAINER_ID" npm test
        '''
      }
    }
  }

  post {
    always {
      echo "✅ Pipeline completed"
    }
  }
}
