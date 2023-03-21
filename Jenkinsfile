pipeline{
    agent any 

    stages{

        stage('Pre-Checks') {  
           step{
             ansiColor('xterm') {
             echo 'Beautify'
        }
    }
}
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