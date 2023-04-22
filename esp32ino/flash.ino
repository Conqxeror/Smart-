#include <WiFi.h>
#include <Firebase_ESP_Client.h>

// Replace with your network credentials
#define WIFI_SSID "Admin"
#define WIFI_PASSWORD "Kadri@123"
#define FIREBASE_HOST "toggle-ser.firebaseapp.com"
#define FIREBASE_AUTH "hwZKPsdh1nMwVZRxDFLgIp32b4MVFjPrpmCaUg98"
#define analogWrite ledcWrite

#define API_KEY "AIzaSyAqsiOhVS6lkfd_KM2K9xMW3HgSGCV7fnM"
#define DATABASE_URL "https://toggle-ser-default-rtdb.firebaseio.com/" 

#include "addons/TokenHelper.h" //Provide the token generation process info.
#include "addons/RTDBHelper.h" //Provide the real-time database payload printing info and other helper functions.

//Define Firebase Data object
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Define pins for the motor driver
int motorInput1 = 23;
int motorInput2 = 22;
int motorEnable = 21;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;
  
  if (Firebase.signUp(&config, &auth, "", "")){
  Serial.println("ok");
  }

  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);     

  pinMode(motorInput1, OUTPUT);
  pinMode(motorInput2, OUTPUT);
  pinMode(motorEnable, OUTPUT);
  pinMode(LED_BUILTIN, OUTPUT);

  digitalWrite(motorEnable, HIGH);
  digitalWrite(motorInput1, LOW);
  digitalWrite(motorInput2, LOW);
}

void loop() 
{
  if(Firebase.RTDB.getString(&fbdo, "motorStatus"))
  {
    String ledstatus = fbdo.stringData();
    if(ledstatus.toInt() == 1){
      lockMotor(); 
    }
    else {
      unlockMotor();
    }
  }else{
    Serial.print("Error in getInt, ");
    Serial.println(fbdo.errorReason());
  } 
}

void lockMotor() {
  digitalWrite(motorInput1, LOW);
  digitalWrite(motorInput2, HIGH);
  digitalWrite(LED_BUILTIN, HIGH);
  analogWrite(motorEnable, 255);
  delay(3000);
  digitalWrite(motorEnable, LOW);
}

void unlockMotor() {
  digitalWrite(motorInput1, HIGH);
  digitalWrite(motorInput2, LOW);
  digitalWrite(LED_BUILTIN, LOW);
  analogWrite(motorEnable, 255);
  delay(3000);
  digitalWrite(motorEnable, LOW);
} 