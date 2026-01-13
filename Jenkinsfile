pipeline {
  agent any

tools {
        nodejs 'node20' // Must match the name you gave in Global Tool Configuration
    }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        // "node" must match the name you set in Global Tool Configuration
        nodejs('node20') { 
            sh 'cd app && npm install'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devsecops-app .'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker run -d -p 3000:3000 devsecops-app'
      }
    }
  }
}
