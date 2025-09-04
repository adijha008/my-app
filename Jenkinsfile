pipeline {
  agent any

  stages {
    stage('Clean Workspace') {
      steps {
        cleanWs()
      }
    }

    stage('Checkout') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[
            url: 'https://github.com/adijha008/my-app.git'
            // credentialsId: 'your-creds-id' // if private repo
          ]]
        ])
      }
    }

    stage('Verify Checkout') {
      steps {
        sh '''
          echo "📂 Current directory: $(pwd)"
          echo "📁 Files:"
          ls -la
        '''
      }
    }

    stage('Clean Build Folders') {
      steps {
        sh 'rm -rf client/build server/build || true'
      }
    }

    stage('Build Docker Images') {
      steps {
        sh '''
          echo "🐳 Building frontend image..."
          docker build -t myapp-frontend ./client

          echo "🐳 Building backend image..."
          docker build -t myapp-backend ./server
        '''
      }
    }

    stage('Run Containers') {
      steps {
        sh '''
          echo "🧹 Stopping previous containers..."
          docker-compose down || true

          echo "🚀 Starting containers..."
          docker-compose up -d --build
        '''
      }
    }

    stage('Test Backend') {
      steps {
        sh '''
          echo "🔍 Checking backend container..."
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