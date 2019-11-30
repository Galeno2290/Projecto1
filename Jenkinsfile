pipeline {
 agent any
 options {
  timeout(time: 2, unit: 'MINUTES')
 }
 Environment {
 ARTIFAC_ID = "galeno2290/app:${env.BUILD_NUMBER}"
 }
 stages{
  stages("Build"){
   steps {
    dockerImage = docker.build "${env.ARTIFAC}"
   }
  }
 }
}
