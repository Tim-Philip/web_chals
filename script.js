/*
  Beginner CTF Challenge: Cookie Admin Panel

  Intended solve path:
  1. Open browser Developer Tools.
  2. Go to the Application/Storage tab.
  3. Inspect Cookies for this site.
  4. Change is_admin=false to is_admin=true.
  5. Refresh the page or click "Check Admin Access".
*/

if (!document.cookie.includes("is_admin=")) {
  document.cookie = "is_admin=false; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const key = parts[0];
    const value = parts.slice(1).join("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

function checkAccess() {
  const status = document.getElementById("status");
  const isAdmin = getCookie("is_admin");

  if (isAdmin === "true") {
    status.innerHTML = `
      <strong>Admin access granted.</strong>
      <br>
      Flag:
      <br>
      <code>iccctf{c00k13s_@r3_n0t_s3cur1ty}</code>
    `;
  } else {
    status.innerHTML = `
      <strong>Access denied.</strong>
      <br>
      Current role: guest
      <br>
      Admin access is required to view the flag.
    `;
  }
}

checkAccess();
