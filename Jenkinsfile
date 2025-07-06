pipeline {
    agent any
    tools {
        nodejs 'Node16' // Node.js מוגדר ב-Jenkins
        python 'Python3' // Python מוגדר ב-Jenkins
    }
    environment {
        GITHUB_TOKEN = credentials('github-token') // טוקן GitHub
        SONAR_TOKEN = credentials('sonarqube-token') // טוקן SonarQube
        SLACK_WEBHOOK = credentials('slack-webhook') // Webhook של Slack
    }
    stages {
        stage('Checkout') {
            steps {
                // שליפת קוד ממאגר GitHub
                git branch: 'main', credentialsId: 'github-token', url: 'https://github.com/your-org/cool-ci-cd-app.git'
            }
        }
        stage('Node.js: Install and Test') {
            steps {
                dir('node-app') {
                    // התקנת תלויות והרצת בדיקות
                    sh 'npm install'
                    sh 'npm test'
                }
            }
            post {
                always {
                    // שמירת דוחות כיסוי
                    dir('node-app') {
                        junit 'tests/*.xml'
                        publishCoverage adapters: [istanbulCoberturaAdapter('coverage/cobertura-coverage.xml')]
                    }
                }
            }
        }
        stage('Python: Install and Test') {
            steps {
                dir('python-app') {
                    // התקנת תלויות והרצת בדיקות
                    sh 'pip install -r requirements.txt'
                    sh 'pytest --junitxml=tests/test-results.xml --cov=. --cov-report=xml:coverage.xml'
                }
            }
            post {
                always {
                    // שמירת דוחות כיסוי
                    dir('python-app') {
                        junit 'tests/test-results.xml'
                        publishCoverage adapters: [coberturaAdapter('coverage.xml')]
                    }
                }
            }
        }
        stage('SonarQube Analysis: Node.js') {
            steps {
                dir('node-app') {
                    // ניתוח קוד Node.js
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner -Dsonar.projectKey=cool-node-app -Dsonar.host.url=http://sonarqube-server:9000 -Dsonar.token=$SONAR_TOKEN'
                    }
                }
            }
        }
        stage('SonarQube Analysis: Python') {
            steps {
                dir('python-app') {
                    // ניתוח קוד Python
                    withSonarQubeEnv('SonarQube') {
                        sh 'sonar-scanner -Dsonar.projectKey=cool-python-app -Dsonar.host.url=http://sonarqube-server:9000 -Dsonar.token=$SONAR_TOKEN'
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                // המתנה לתוצאות Quality Gate
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
    post {
        always {
            // שליחת התראה ל-Slack
            slackSend webhookUrl: "${SLACK_WEBHOOK}",
                      color: currentBuild.result == 'SUCCESS' ? '#00FF00' : '#FF0000',
                      message: "Pipeline *${currentBuild.result}* for ${env.JOB_NAME} #${env.BUILD_NUMBER}\n${env.BUILD_URL}"
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}