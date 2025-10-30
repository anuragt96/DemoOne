pipeline {
    agent any

    environment {
        // Optional: Cache browsers so they aren't downloaded every time
        PLAYWRIGHT_BROWSERS_PATH = "C:\\ProgramData\\Jenkins\\playwright-browsers"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📥 Pulling code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages...'
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo '🌐 Installing Playwright browsers...'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running Playwright Tests (List Mode)...'
                // Use list reporter only — no HTML report generated
                bat 'npx playwright test --reporter=list'
            }
        }
    }

    post {
        success {
            echo '✅ All tests passed successfully!'
        }
        failure {
            echo '❌ Some tests failed!'
        }
        always {
            echo '🧹 Cleaning up workspace...'
            cleanWs()
        }
    }
}
