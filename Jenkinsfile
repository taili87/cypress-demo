pipeline{
    agent any 

    triggers{
        pollSCM '*/1 * * * *'
    }

    options {
          buildDiscarder(logRotator(numToKeepStr:'10'))
          timeout(time: 5, unit: 'MINUTES')
          ansiColor('xterm')
}
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