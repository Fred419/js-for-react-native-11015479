function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    const userProfiles = [];
    let id = 1; // Auto-incrementing ID
  
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      userProfiles.push({
        originalName,
        modifiedName,
        id: id++, // Increment ID for each profile (shorthand)
      });
    }
  
    return userProfiles;
  }
  
  // Sample data for demonstration
  const names = ["Fred", "Danso", "Phame", "kobby"];
  const modifiedNames = ["FRED", "DANSO", "PHAME", "KOBBY"];
  
  const userProfiles = createUserProfiles(names, modifiedNames);
  
  console.log(userProfiles);
  