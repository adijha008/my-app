#!groovy

import jenkins.model.*
import hudson.security.*

def instance = Jenkins.getInstance()

println "--> creating local user 'newadmin'"

def hudsonRealm = instance.getSecurityRealm()
hudsonRealm.createAccount("newadmin", "newpassword123")
instance.setSecurityRealm(hudsonRealm)
instance.save()