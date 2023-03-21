pipeline{
    agent any 
    stages{

        stage('Building'){
             steps{
               echo 'building the application'
            }
           
        }
        stage ('Pre-Build-Node'){
            steps{
                bat "npm install"
                
            }
        }

        stage('Initialize') {
            ansiColor('xterm') {
               echo 'beautify'
                 }
               }

        stage ('Testing'){
            steps{
              
                bat "npx cypress run"
            }
        }

        stage('Deploying'){
            steps{
               echo 'starting Deployment'
            }
        }
    }

    
}