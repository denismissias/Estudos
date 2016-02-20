/* O padrão S.O.S. é formado de três pontos (sinais curtos), seguidos por três traços (sinais longos), seguidos por três pontos novamente. */

byte ledPin = 10;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  //3 pontos
  for (byte x = 0; x < 3; x++) {
    digitalWrite(ledPin, HIGH);
    delay(150);
    digitalWrite(ledPin, LOW);
    delay(100);
  }

  //3 traços
  for (byte x = 0; x < 3; x++) {
    digitalWrite(ledPin, HIGH);
    delay(400);
    digitalWrite(ledPin, LOW);
    delay(100);
  }

  //3 pontos
  for (byte x = 0; x < 3; x++) {
    digitalWrite(ledPin, HIGH);
    delay(150);
    digitalWrite(ledPin, LOW);
    delay(100);
  }

  // Após 5 segundos, repete o sinal S.O.S.
  delay(5000);
}
