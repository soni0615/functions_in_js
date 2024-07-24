function generateGreeting(name, name_one, name_two) {
  let message = "Hello! I hope you're having a fantastic day";
  let names = message + " " +name +"\n"+ message + " " + name_one + "\n" + message + " " +
    name_two+"\n";
  return names;
}
console.log(generateGreeting("Priya", "Riya", "Payal"));
