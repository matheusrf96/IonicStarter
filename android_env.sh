#!/bin/bash
#####################
#
# Instalação do Ambiente Android no Ubuntu
#
#####################

# O Android Studio deve estar instalado.

sudo apt update

echo "===== Android Sdk ====="

export ANDROID_HOME=/home/matheus/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools
echo $ANDROID_HOME

echo "===== Java ====="

sudo add-apt-repository ppa:webupd8team/java
sudo apt update
sudo apt install -y oracle-java8-installer
export JAVA_HOME=/usr/lib/jvm/java-8-oracle/jre/bin/java

echo "===== Gradle ====="

sudo apt install -y gradle
export PATH=$PATH:/opt/gradle/gradle-3.5/bin

ionic cordova run android --device



