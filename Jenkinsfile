pipeline{
    agent any 
    stages{
           stage('Deployment'){
             steps{
               echo 'building the application'
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

        stage('Reports'){
            steps{
               echo 'get test reports'
            }
        }
    }

    
}