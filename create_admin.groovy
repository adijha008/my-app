#!groovy

import jenkins.model.*
import hudson.security.*

def instance = Jenkins.getInstance()

def hudsonRealm = instance.getSecurityRealm()
hudsonRealm.createAccount("newadmin", "newpassword123")
instance.save()