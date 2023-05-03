function parseAndDisplayName(fullName){
    console.log(`Name: ${fullName}`);
    let Name = fullName.indexOf(' ');
   firstName = fullName.substring(0,7);
    console.log("First name:", firstName );
    lastName = fullName.substring(8);
    console.log("Last name:", lastName);
}
parseAndDisplayName("Sephora Pashe");

