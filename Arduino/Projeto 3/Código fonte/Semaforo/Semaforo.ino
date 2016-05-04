int ledDelay = 10000;
byte redPin = 10;
byte yellowPin = 9;
byte greenPin = 8;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  digitalWrite(redPin, HIGH);
  delay(ledDelay);

  digitalWrite(yellowPin, HIGH);
  delay(2000);

  digitalWrite(greenPin, HIGH);
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, LOW);
  delay(ledDelay);

  digitalWrite(yellowPin, HIGH);
  digitalWrite(greenPin, LOW);
  delay(2000);

  digitalWrite(yellowPin, LOW);
}
