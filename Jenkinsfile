pipeline{
    agent any 

    triggers{
        pollSCM '*/5 * * * *'
    }
   
    parameters{
        string (name: 'SPEC', defaultValue: "cypress/integration/**/**", description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description:"Choice of browser you want to use to execute the scripts")
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
              
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            steps{
               echo 'starting Deployment'
            }
        }
    }

    
}