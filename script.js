function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob > now) {
    result.textContent = "Date of birth can't be in the future.";
    return;
  }

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  let hours = now.getHours() - dob.getHours();
  let minutes = now.getMinutes() - dob.getMinutes();

  // Adjust minutes
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  // Adjust hours
  if (hours < 0) {
    days--;
    hours += 24;
  }

  // Adjust days
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust months
  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You have lived for:
${years} years
${months} months
${days} days
${hours} hours
${minutes} minutes`;
}
