pipeline{
    agent any

        parameters{
        string (name: 'SPEC', defaultValue: "cypress/integration/**/**", description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description:"Choice of browser you want to use to execute the scripts")
    }
       
    stages{

         stage('Deployment'){
            'step'{
                echo "Deployment..."
                
            }
        }

         stage('Pre-build'){
            'step'{
               bat 'npm install'
            }
        }
        stage('Build'){
            'step'{
                echo "Building..."
                
            }
        }

         stage('Tests'){
            'step'{
                
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

         stage('Test Reports'){
            'step'{
                echo "Reports..."
                
            }
        }
    }
}